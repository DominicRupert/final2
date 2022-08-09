using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CodeWorks.Auth0Provider;
using final2.Interfaces;
using final2.Models;
using final2.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace final2.Controllers
{
    [ApiController ]
    [Route("api/[controller]")]

    public class KeepsController : ControllerBase
    {
        private readonly KeepsService _ks;

        public KeepsController(KeepsService ks)
        {
            _ks = ks;
        }
        [HttpGet]
        public ActionResult<List<Keep>> Get()
        {
            try
            {
                List<Keep> keeps = _ks.Get();
                return Ok(keeps);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpGet("{id}")]
        public ActionResult<Keep> Get(int id)
        {
            try
            {
                Keep keep = _ks.Get(id);
                return Ok(keep);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpPost]
        [Authorize]
        public async Task<ActionResult<Keep>> Create([FromBody] Keep keepData)
        {
            try
            {
                Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
                keepData.CreatorId = userInfo.Id;
                Keep newKeep = await _ks.Create(keepData);
                newKeep.Creator = userInfo;
                return Ok(newKeep);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpPut("{id}")]
        [Authorize]
        

    }
}