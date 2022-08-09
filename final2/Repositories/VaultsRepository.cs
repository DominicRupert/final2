using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using final2.Interfaces;
using final2.Models;
using Dapper;

namespace final2.Repositories
{
    public class VaultsRepository : IRepository<Vault, int>
    {
        private readonly IDbConnection _db;
        public VaultsRepository(IDbConnection db)
        {
            _db = db;
        }
        public List<Vault> Get()
        {
            string sql = @"
            Select
            v.*,
            a.*
            From vaults v
            Join accounts a on a.id = v.CreatorId
            ";
            return _db.Query<Vault, Profile, Vault>(sql, (vault, profile) =>
            {
                vault.Creator = profile;
                return vault;
            }).ToList();

        }
        public Vault Get(int id)
        {
            string sql = @"
            Select
            v.*,
            a.*
            From vaults v
            Join accounts a on a.id = v.CreatorId
            Where v.Id = @id
            ";
            return _db.Query<Vault, Profile, Vault>(sql, (vault, profile) =>
            {
                vault.Creator = profile;
                return vault;
            }, new { id }).FirstOrDefault();
        }
        internal List<Vault> GetByCreatorId(string id)
        {
            string sql = @"
            Select
            v.*,
            a.*
            From vaults v
            Join accounts a on a.id = v.CreatorId
            Where a.id = @id
            ";
            return _db.Query<Vault, Profile, Vault>(sql, (vault, profile) =>
            {
                vault.Creator = profile;
                return vault;
            }, new { id }).ToList();
        }

        public Vault Create(Vault vaultData)
        {
            string sql = @"
            Insert into vaults
            (name, description, isPrivate creatorId)
            Values
            (@Name, @Description, @IsPrivate @CreatorId);
            Select LAST_INSERT_ID()
            ";
            int id = _db.ExecuteScalar<int>(sql, vaultData);
            vaultData.Id = id;
            return vaultData;
        }

        public void Edit(Vault found)
        {
            string sql = @"
            Update vaults
            Set name = @Name,
            description = @Description,
            Where id = @Id
            ";
            _db.Execute(sql, found);
        }
        public void Delete(int id)
        {
            string sql = @"
            Delete from vaults
            Where id = @id LIMIT 1
            ";
            _db.Execute(sql, new { id });
        }


    }
}