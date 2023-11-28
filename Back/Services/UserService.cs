using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Back.Services;

using DTO;
using Model;

public class UserService : IUserService
{
    GymRestaurantContext ctx;
    public UserService(GymRestaurantContext ctx)
        => this.ctx = ctx;
    public async Task Create(UserData data)
    {
        Usuario usuario = new Usuario();
        usuario.Cpf = data.CPF;
        usuario.Senha = data.Password;
        usuario.Salt = "????";

        this.ctx.Add(usuario);
        await this.ctx.SaveChangesAsync();
    }



    public async Task<Usuario> GetByLogin(string login)
    {
        var query = 
            from u in this.ctx.Usuarios
            where u.Cpf == login
            select u;

        return await query.FirstOrDefaultAsync();
    }

    Task<Usuario> IUserService.GetByLogin(string login)
    {
        throw new NotImplementedException();
    }
}