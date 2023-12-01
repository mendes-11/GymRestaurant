using System;
using System.Collections.Generic;

namespace Back.Model;

public partial class Pedido
{
    public int Id { get; set; }

    public decimal Total { get; set; }

    public int? UsuarioId { get; set; }

    public int? CupomId { get; set; }

    public virtual Cupom? Cupom { get; set; }

    public virtual ICollection<PedidoProduto> PedidoProdutos { get; } = new List<PedidoProduto>();

    public virtual Usuario? Usuario { get; set; }
}
