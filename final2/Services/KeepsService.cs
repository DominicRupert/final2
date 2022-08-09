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

        internal Task Delete(int id)
        {
            throw new NotImplementedException();
        }

        internal Task<Keep> Edit(Keep keepData)
        {
            throw new NotImplementedException();
        }
    }
}

