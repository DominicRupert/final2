using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CodeWorks.Auth0Provider;
using final2.Models;
using final2.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;


namespace final2.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VaultKeepsController : ControllerBase
    {
        private readonly VaultKeepsService _vks;
        public VaultKeepsController(VaultKeepsService vks)
        {
            _vks = vks;
        }
        [HttpPost]
        [Authorize]
        public async Task<ActionResult<VaultKeep>> Create([FromBody] VaultKeep vk)
        {
            try{
                Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
                vk.CreatorId = userInfo.Id;
                VaultKeep newVk = _vks.Create(vk);
                return Ok(newVk);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        
        }
        [HttpDelete("{id}")]
        [Authorize]
        public async Task<ActionResult<VaultKeep>> Delete(int id)
        {
          try{
            Profile userInfo = await HttpContext.GetUserInfoAsync<Profile>();
            _vks.Delete(id, userInfo.Id);
            return Ok();
          } catch(Exception e)
          {
            return BadRequest(e.Message);
          }
        }
        
    }
}