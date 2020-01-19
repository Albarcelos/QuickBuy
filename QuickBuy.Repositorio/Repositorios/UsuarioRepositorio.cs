using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Repositorio.Contexto;
using System.Linq;

namespace QuickBuy.Repositorio.Repositorios
{
    public class UsuarioRepositorio : BaseRepositorio<Usuario>, IUsuarioRepositorio
    {
        public UsuarioRepositorio(QuickBuyContexto quickBuyContexto) : base(quickBuyContexto)
        {

        }

        Usuario IUsuarioRepositorio.Obter(string email, string senha)
        {
            return QuickBuyContexto.Usuarios.FirstOrDefault(user => user.Email == email && user.Senha == senha);
        }
    }
}
