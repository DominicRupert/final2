using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using final2.Models;
using Dapper;
using System.Data;
namespace final2.Repositories
{
    public class VaultKeepsRepository
    {
        private readonly IDbConnection _db;
        public VaultKeepsRepository(IDbConnection db)
        {
            _db = db;
        }
        internal VaultKeep Get(int id)
        {
            string sql = "SELECT * FROM vaultkeeps WHERE id = @id";
            return _db.QueryFirstOrDefault<VaultKeep>(sql, new { id });
        }
        internal List<VaultKeepViewModel> GetKeeps(int vaultId)
        {
            string sql = @"
                SELECT
                a.*,
                 k.*,
                  vk.id as vkId
                FROM vaultkeeps vk
                JOIN keeps k ON k.id = vk.keepId
                join accounts a on a.id = k.accountId
                WHERE vk.vaultId = @vaultId";
            return _db.Query<Profile, VaultKeepViewModel, VaultKeepViewModel>(sql, (p, vk) =>
            {
                vk.Creator = p;
                return vk;
            }, new { vaultId }).ToList();

        }

        internal VaultKeep Create(VaultKeep vk)
        {
            string sql = @"
            INSERT INTO vaultkeeps
            (vaultId, keepId, creatorId)
            VALUES
            (@VaultId, @KeepId, @CreatorId);
            SELECT LAST_INSERT_ID();";
            int id = _db.ExecuteScalar<int>(sql, vk);
            vk.Id = id;
            return vk;
        }




        internal void Delete(int id)
        {
            string sql = "DELETE FROM vaultkeeps WHERE id = @id LIMIT 1";
            _db.Execute(sql, new { id });
        }
    }
}