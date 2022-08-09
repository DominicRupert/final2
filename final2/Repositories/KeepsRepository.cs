using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using final2.Interfaces;
using final2.Models;
using System.Data;

namespace final2.Repositories
{
    public class KeepsRepository : IRepository<Keep, int>
    {

        private readonly IDbConnection _db;

        public KeepsRepository(IDbConnection db)
        {
            _db = db;
        }

        public List<Keep> Get()
        {
            string sql = @"
            SELECT
            k.*,
            a.*
            FROM keeps k
            JOIN accounts a ON a.id = k.creatorId";
            return _db.Query<Keep, Profile, Keep>(sql, (keep, profile) =>
            {
                keep.Creator = profile;
                return keep;
            }).ToList();
        }
        public Keep Get(int id)
        {
            string sql = @"
            SELECT
            k.*,
            a.*
            FROM keeps k
            JOIN accounts a ON a.id = k.creatorId
            WHERE k.id = @id";
            return _db.Query<Keep, Profile, Keep>(sql, (keep, profile) =>
            {
                keep.Creator = profile;
                return keep;
            } , new { id }).FirstOrDefault();
        }

      

        internal void AddToKeepCount(int keepId)
        {
            string sql = @"
            UPDATE keeps
            SET kept = kept + 1
            WHERE id = @keepId";
            _db.Execute(sql, new { keepId });
        }

        internal void SubtractFromKeepCount(int keepId)
        {
            string sql = @"
            UPDATE keeps
            SET kept = kept - 1
            WHERE id = @keepId";
            _db.Execute(sql, new { keepId });
        }
        internal List<Keep> GetByUserId(string id)
        {
            string sql = @"
            SELECT
            k.*,
            a.*
            FROM keeps k
            JOIN accounts a ON a.id = k.creatorId
            WHERE a.id = @id";
            return _db.Query<Keep, Profile, Keep>(sql, (keep, profile) =>
            {
                keep.Creator = profile;
                return keep;
            } , new { id }).ToList();
        }
        internal void AddToViewCount(int id)
        {
            string sql = @"
            UPDATE keeps
            SET views = views + 1
            WHERE id = @id";
            _db.Execute(sql, new { id });
        }
        public Keep Create(Keep keepData)
        {
            string sql = @"
            INSERT INTO keeps
            (name, description, img, kept, views, creatorId)
            VALUES
            (@Name, @Description, @Img, @Kept, @Views, @CreatorId);
            SELECT LAST_INSERT_ID();";
            keepData.Id = _db.ExecuteScalar<int>(sql, keepData);
       
            return keepData;
        }

        internal void Edit(Keep keepData)
        {
            string sql = @"
            UPDATE keeps
            SET name = @Name,
                description = @Description,
                img = @Img,
                kept = @Kept,
            WHERE id = @Id";
            _db.Execute(sql, keepData);
        }
        internal void Delete(int id)
        {
            string sql = @"
            DELETE FROM keeps
            WHERE id = @id LIMIT 1";
            _db.Execute(sql, new { id });
        }

        
    }
}