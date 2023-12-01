using System;
using System.Collections.Generic;

namespace Back.Model;

public partial class Cupom
{
    public int Id { get; set; }

    public int UsuarioId { get; set; }

    public int ImagemId { get; set; }

    public virtual Imagem Imagem { get; set; } = null!;

    public virtual ICollection<Pedido> Pedidos { get; } = new List<Pedido>();

    public virtual Usuario Usuario { get; set; } = null!;
}
