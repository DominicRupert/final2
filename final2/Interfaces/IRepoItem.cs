using final2.Models;

namespace final2.Interfaces
{
	public interface IRepoItem<T>
	{
		T Id { get; set; }
		string CreatorId { get; set; }
		Profile Creator { get; set; }
	}
}