using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using final2.Interfaces;
using final2.Models;
using Microsoft.AspNetCore.Authorization;
using final2.Controllers;
using final2.Repositories;

namespace final2.Services
{
    public class KeepsService
    {
        private readonly KeepsRepository _repo;

        public KeepsService(KeepsRepository repo)
        {
            _repo = repo;
        }

        internal List<Keep> Get()
        {
            return _repo.Get();
        }
        internal List<Keep> GetByUserId(string id)
        {
            return _repo.GetByUserId(id);
        }
        internal Keep Get(int id)
        {
            Keep found = _repo.Get(id);
            found.Views += 1;
            if (found != null)
            {
                _repo.Edit(found);
            }
            AddView(id);
            return found;
        }
      

        internal void AddView(int id)
        {
            _repo.AddToViewCount(id);
        }

        internal Keep Create(Keep keepData)
        {
            return _repo.Create(keepData);
        }

        internal void Delete(int id, string userId)
        {
            Keep found = Get(id);
            OwnerCheck(found.CreatorId, userId);
            _repo.Delete(id);
        }


        internal Keep Edit(Keep keepData)
        {
            Keep found = Get(keepData.Id);
            OwnerCheck(found.CreatorId, keepData.CreatorId);
            found.Img = keepData.Img ?? found.Img;
            found.Name = keepData.Name ?? found.Name;
            found.Description = keepData.Description ?? found.Description;
            _repo.Edit(found);
            return found;
           
        }

        internal static void OwnerCheck(string creatorId, string userId)
        {
            if (creatorId != userId)
            {
                throw new Exception("You are not the owner of this keep");
            }
        }
    }
}

