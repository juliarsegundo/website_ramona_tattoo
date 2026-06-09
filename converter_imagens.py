import os
from PIL import Image

pasta_entrada = "imagens-originais"
pasta_saida = "Imagens Saída Nome"

os.makedirs(pasta_saida, exist_ok=True)

contador = 1

for arquivo in os.listdir(pasta_entrada):
    if arquivo.lower().endswith((".png", ".jpeg", ".jpg")):
        caminho_entrada = os.path.join(pasta_entrada, arquivo)

        imagem = Image.open(caminho_entrada)

        # 🔥 corrige rotação de celular automaticamente
        try:
            from PIL import ImageOps
            imagem = ImageOps.exif_transpose(imagem)
        except:
            pass

        # converter para RGB (necessário para JPG)
        imagem = imagem.convert("RGB")

        # 🔥 redimensionar proporcionalmente
        largura_max = 800
        if imagem.width > largura_max:
            proporcao = largura_max / imagem.width
            altura_nova = int(imagem.height * proporcao)
            imagem = imagem.resize((largura_max, altura_nova))

        novo_nome = f"Nome-{contador}.jpg"
        caminho_saida = os.path.join(pasta_saida, novo_nome)

        # 🔥 salvar otimizado
        imagem.save(
            caminho_saida,
            "JPEG",
            quality=70,
            optimize=True
        )

        contador += 1

print("✅ Imagens prontas para colocar no site!")