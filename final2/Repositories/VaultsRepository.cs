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
            string sql= @"
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
            } , new { id }).FirstOrDefault();
        }
        
        
    }
}