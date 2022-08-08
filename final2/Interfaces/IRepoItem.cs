using keepr.Models;

namespace keepr.Interfaces
{
	public interface IRepoItem<T>
	{
		T Id { get; set; }
		string CreatorId { get; set; }
		Profile Creator { get; set; }
	}
}