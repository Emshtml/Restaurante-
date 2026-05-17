export default function RestauranteLandingPage() {
  const pratos = [
    {
      nome: 'Picanha na Brasa',
      descricao: 'Picanha nobre grelhada na brasa, suculenta e cheia de sabor.',
      preco: 'R$ 390,00',
      imagem:
        'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
    },

    {
      nome: 'Massa Italiana Artesanal',
      descricao: 'Massa artesanal ao molho pomodoro finalizada com queijo parmesão.',
      preco: 'R$ 45,00',
      imagem:
        'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop',
    },

    {
      nome: 'Burger Gourmet',
      descricao: 'Pão artesanal, blend especial e cheddar cremoso.',
      preco: 'R$ 39,00',
      imagem:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop',
    },

    {
      nome: 'Filé à Parmegiana',
      descricao: 'Filé bovino empanado coberto com queijo e molho artesanal.',
      preco: 'R$ 42,00',
      imagem:
        'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=1200&auto=format&fit=crop',
    },

    {
      nome: 'Filé de Frango Grelhado',
      descricao: 'Filé de frango grelhado com arroz, purê e legumes.',
      preco: 'R$ 29,90',
      imagem:
        'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop',
    },

    {
      nome: 'Calabresa Acebolada',
      descricao: 'Linguiça calabresa acebolada com tempero especial.',
      preco: 'R$ 25,00',
      imagem:
        'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=1200&auto=format&fit=crop',
    },

    {
      nome: 'Feijoada Completa',
      descricao: 'Feijoada tradicional com arroz, couve e farofa.',
      preco: 'R$ 35,00',
      imagem:
        'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200&auto=format&fit=crop',
    },

    {
      nome: 'Salmão Grelhado',
      descricao: 'Salmão premium grelhado com legumes especiais.',
      preco: 'R$ 59,00',
      imagem:
        'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200&auto=format&fit=crop',
    },

    {
      nome: 'Strogonoff de Frango',
      descricao: 'Strogonoff cremoso acompanhado de arroz e batata.',
      preco: 'R$ 32,00',
      imagem:
        'https://images.unsplash.com/photo-1604908176997-4317dac4b2e0?q=80&w=1200&auto=format&fit=crop',
    },

    {
      nome: 'Costela na Pressão',
      descricao: 'Costela macia preparada lentamente com tempero especial.',
      preco: 'R$ 39,90',
      imagem:
        'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="relative h-screen flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
            Restaurante da Tia Adriana
          </h1>

          <p className="text-xl text-zinc-300 mb-10">
            Experiência gastronômica premium com pedidos rápidos via WhatsApp.
          </p>

          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            className="bg-green-500 hover:bg-green-400 transition px-8 py-4 rounded-2xl text-xl font-bold"
          >
            Pedir no WhatsApp
          </a>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Nosso Cardápio
            </h2>

            <p className="text-zinc-400 text-lg">
              Os pratos favoritos dos nossos clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pratos.map((prato, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-3xl overflow-hidden border border-yellow-600 shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <img
                  src={prato.imagem}
                  alt={prato.nome}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-3xl font-bold mb-3">
                    {prato.nome}
                  </h3>

                  <p className="text-zinc-400 mb-5">
                    {prato.descricao}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-extrabold text-yellow-400">
                      {prato.preco}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/5511999999999?text=Olá,%20quero%20pedir%20${encodeURIComponent(
                      prato.nome
                    )}`}
                    target="_blank"
                    className="block text-center bg-green-500 hover:bg-green-400 transition-all py-4 rounded-xl text-lg font-bold"
                  >
                    Pedir Agora
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
