using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using final2.Interfaces;
using final2.Models;
using Microsoft.AspNetCore.Authorization;
using final2.Controllers;

namespace final2.Services
{
    public class KeepsService
    {
        internal Task<Keep> Create(Keep keepData)
        {
            throw new NotImplementedException();
        }

        internal Keep Get(int id)
        {
            throw new NotImplementedException();
        }

        internal List<Keep> Get()
        {
            throw new NotImplementedException();
        }
    }
}

