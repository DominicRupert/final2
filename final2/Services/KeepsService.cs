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
            if (found == null)
            {
                throw new Exception("Invalid Id");
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
            Keep original = Get(id);
            OwnerCheck(original.CreatorId, userId);
            _repo.Delete(id);
        }


        internal Keep Edit(Keep keepData)
        {
            Keep original = Get(keepData.Id);
            OwnerCheck(keepData.CreatorId, original.CreatorId);
            original.Img = keepData.Img ?? original.Img;
            original.Name = keepData.Name ?? original.Name;
            original.Description = keepData.Description ?? original.Description;
            _repo.Edit(original);
            return original;
           
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

