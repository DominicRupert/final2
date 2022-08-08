using keepr.Interfaces;

namespace keepr.Models
{
	public class Vault : IRepoItem<int>
	{
		public int Id { get; set; }
		public string CreatorId { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public bool IsPrivate { get; set; }
		public Profile Creator { get; set; }
	}
}