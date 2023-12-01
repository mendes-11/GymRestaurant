using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Back.Services;

using DTO;
using Model;

public class UserService : IUserService
{
    GymRestaurantContext ctx;
    ISecurityService security;
    public UserService(GymRestaurantContext ctx, ISecurityService security)
    {
        this.ctx = ctx;
        this.security = security;
    }

    public async Task Create(UserData data)
    {
        Usuario usuario = new Usuario();
        var salt = await security.GenerateSalt();

        usuario.Nome = data.Nome;
        usuario.Email = data.Email;
        usuario.Cpf = data.CPF;
        usuario.Senha = await security.HashPassword(
            data.Password, salt
        );
        usuario.Adm = data.isAdm;
        usuario.Salt = salt;

        this.ctx.Add(usuario);
        await this.ctx.SaveChangesAsync();
    }

    public async Task<Usuario> GetByLogin(string cpf)
    {
        var query =
            from u in this.ctx.Usuarios
            where u.Cpf == cpf
            select u;
        
        return await query.FirstOrDefaultAsync();
    }
}