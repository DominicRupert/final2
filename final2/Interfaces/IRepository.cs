using System.Collections.Generic;

namespace final2.Interfaces
{
	public interface IRepository<TItem, TId>
	{
		List<TItem> Get();
		TItem Get(TId id);
	}
}