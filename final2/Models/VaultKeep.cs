using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using keepr.Interfaces;

namespace keepr.Models
{
	public class VaultKeep
	{
		public int Id { get; set; }
		public string CreatorId { get; set; }
		public int VaultId { get; set; }
		public int KeepId { get; set; }
	}
}