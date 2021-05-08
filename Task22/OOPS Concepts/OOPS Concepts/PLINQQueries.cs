using System;
using System.Collections.Generic;
using System.Linq;
public class PLINQQueries
{
	public PLINQQueries()
	{
		string[] names = { "Ravi", "Teja", "Lakkoju", "Naga", "Sai", "Sri" };

		IEnumerable<String> query = names
			.Where(n => n.Contains('a'))
			.OrderBy(n => n)
			.Select(n => n.ToLower());

        foreach (var name in query)
        {
			Console.WriteLine(name);
        }
	}
}
