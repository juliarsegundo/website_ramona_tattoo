import os
from PIL import Image

# pasta onde estão as imagens
pasta_entrada = "imagens-originais"

# pasta onde vão as imagens prontas
pasta_saida = "imagens-prontas"

os.makedirs(pasta_saida, exist_ok=True)

contador = 1

for arquivo in os.listdir(pasta_entrada):
    if arquivo.lower().endswith((".png", ".jpeg", ".jpg")):
        caminho_entrada = os.path.join(pasta_entrada, arquivo)

        imagem = Image.open(caminho_entrada)

        # converter para RGB (necessário para JPG)
        imagem = imagem.convert("RGB")

        # redimensionar (opcional, mas recomendado)
        largura_max = 800
        proporcao = largura_max / imagem.width
        altura_nova = int(imagem.height * proporcao)
        imagem = imagem.resize((largura_max, altura_nova))

        novo_nome = f"Coloridas-{contador}.jpg"
        caminho_saida = os.path.join(pasta_saida, novo_nome)

        imagem.save(caminho_saida, "JPEG", quality=80, optimize=True)

        contador += 1

print("✅ Imagens convertidas com sucesso!")