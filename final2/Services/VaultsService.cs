using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using final2.Models;
using final2.Repositories;

namespace final2.Services
{
    public class VaultsService
    {
        private readonly VaultsRepository _repo;
        public VaultsService(VaultsRepository repo)
        {
            _repo = repo;
        }
        internal List<Vault> Get()
        {
            List<Vault> vaults = _repo.Get();
            vaults = vaults.FindAll(v => v.IsPrivate == false);
            return vaults;
        }
        private Vault Get(int id)
        {
            Vault vault = _repo.Get(id);
            return vault;
        }
        internal Vault Get(int vaultId, string userId)
        {
            Vault vault = _repo.Get(vaultId);
            if (vault.IsPrivate && vault.CreatorId != userId)
            {
                throw new Exception("You do not have access to this vault.");

            }
            return vault;
        }



        internal Vault Create(Vault vaultData)
        {
            return _repo.Create(vaultData);
        }

        internal Vault Edit(Vault vaultData)
        {
            Vault found = Get(vaultData.Id);
            if (found.CreatorId != vaultData.CreatorId)
            {
                throw new Exception("You do not have access to this vault.");
            }
            found.Name = vaultData.Name ?? found.Name;
            found.Description = vaultData.Description ?? found.Description;
            _repo.Edit(found);
            return found;
        }
        internal List<Vault> GetByCreatorId(string id, string userId)
        {
            List<Vault> vaults = _repo.GetByCreatorId(id);
            if (id == userId)
            {
                return vaults;
            }

            vaults = vaults.FindAll(v => v.IsPrivate == false);
            return vaults;


        }



        internal void Delete(int id, string userId)
        {
            Vault found = Get(id);
            if (found.CreatorId != userId)
            {
                throw new Exception("You do not have access to this vault.");
            }
            _repo.Delete(id);

        }
    }
}