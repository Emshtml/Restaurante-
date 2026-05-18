export default function RestauranteLandingPage() {
  const pratos = [
    {
      nome: 'Picanha na Brasa',
      descricao: 'Corte premium servido com acompanhamentos especiais.',
      preco: 'R$ 390,00',
      imagem: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop'
    },
    {
      nome: 'Massa Italiana Artesanal',
      descricao: 'Receita exclusiva com molho fresco e ingredientes selecionados.',
      preco: 'R$ 45,00',
      imagem: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop'
    },
    {
      nome: 'Burger Gourmet',
      descricao: 'Hambúrguer artesanal com blend especial e cheddar cremoso.',
      preco: 'R$ 39,00',
      imagem: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop'
    },
    {
      nome: 'Filé à Parmegiana',
      descricao: 'Filé suculento coberto com molho artesanal e queijo gratinado.',
      preco: 'R$ 42,00',
      imagem: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=1200&auto=format&fit=crop'
    },
    {
      nome: 'Filé de Frango',
      descricao: 'Peito de frango temperado servido com acompanhamentos especiais.',
      preco: 'R$ 29,90',
      imagem: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=1200&auto=format&fit=crop'
    },
    {
      nome: 'Calabresa Acebolada',
      descricao: 'Calabresa especial acebolada na chapa com sabor marcante.',
      preco: 'R$ 25,00',
      imagem: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  return (
    <div className="bg-zinc-950 text-white min-h-screen font-sans">
      {/* HERO */}
      <section
        className="relative h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Sabor Inesquecível <br />
            Em Cada Pedido
          </h1>

          <p className="text-lg md:text-2xl text-zinc-300 mb-10">
            Restaurante premium com delivery rápido, pratos artesanais e atendimento direto pelo WhatsApp.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511994550675?text=Olá,%20quero%20fazer%20um%20pedido"
              target="_blank"
              className="bg-green-500 hover:bg-green-400 transition-all px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl"
            >
              Pedir no WhatsApp
            </a>

            <a
              href="#cardapio"
              className="border border-white hover:bg-white hover:text-black transition-all px-8 py-4 rounded-2xl text-lg font-bold"
            >
              Ver Cardápio
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-24 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop"
            alt="Restaurante"
            className="rounded-3xl shadow-2xl h-[500px] object-cover w-full"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6">Experiência Gastronômica Completa</h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Criamos pratos sofisticados com ingredientes frescos e atendimento de alto nível.
              Nosso foco é transformar cada refeição em uma experiência memorável.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-zinc-800 p-6 rounded-2xl">
                <h3 className="text-3xl font-bold text-green-400">+5k</h3>
                <p className="text-zinc-400 mt-2">Pedidos entregues</p>
              </div>

              <div className="bg-zinc-800 p-6 rounded-2xl">
                <h3 className="text-3xl font-bold text-green-400">4.9★</h3>
                <p className="text-zinc-400 mt-2">Avaliação média</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARDÁPIO */}
      <section id="cardapio" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Pratos Mais Pedidos</h2>
            <p className="text-zinc-400 text-lg">
              Os favoritos dos nossos clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pratos.map((prato, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <img
                  src={prato.imagem}
                  alt={prato.nome}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{prato.nome}</h3>
                  <p className="text-zinc-400 mb-4">{prato.descricao}</p>

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-green-400">
                      {prato.preco}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/5511994550675?text=Olá,%20tenho%20interesse%20no%20prato%20${encodeURIComponent(prato.nome)}`}
                    target="_blank"
                    className="block text-center bg-green-500 hover:bg-green-400 transition-all py-3 rounded-xl font-bold"
                  >
                    Pedir Agora
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-24 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-14">O Que Nossos Clientes Dizem</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Comida impecável e entrega super rápida.',
              'Atendimento excelente pelo WhatsApp e pratos incríveis.',
              'Melhor experiência gastronômica delivery que já tive.'
            ].map((texto, index) => (
              <div key={index} className="bg-zinc-800 p-8 rounded-3xl shadow-xl">
                <p className="text-zinc-300 text-lg italic">“{texto}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            Faça Seu Pedido Agora
          </h2>

          <p className="text-zinc-300 text-xl mb-10">
            Atendimento imediato direto pelo WhatsApp.
          </p>

          <a
            href="https://wa.me/5511994550675?text=Olá,%20quero%20fazer%20um%20pedido"
            target="_blank"
            className="inline-block bg-green-500 hover:bg-green-400 transition-all px-10 py-5 rounded-2xl text-2xl font-bold shadow-2xl"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500">
        <p>© 2026 Restaurante Prime Flavor • Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
