using System.Collections.Generic;

namespace keepr.Interfaces
{
	public interface IRepository<TItem, TId>
	{
		List<TItem> Get();
		TItem Get(TId id);
	}
}