using System.Threading.Tasks;

namespace Back.Services;

using DTO;
using Model;

public interface IProductService
{
    Task Create(ProductData product);
    Task<Produto> GetByName(string Nome);
    Task<List<Produto>> Get();

}

