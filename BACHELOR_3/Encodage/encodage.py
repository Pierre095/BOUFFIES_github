# Encodage Base64 sans bibliothèque standard
# Version uniquement pour chaînes de caractères Unicode

# Alphabet Base64
BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"

def string_to_binary(data):
    """Convertir une chaîne en suite de bits"""
    binary = ''
    for char in data:
        binary += format(ord(char), '08b')  # 8 bits par caractère
    return binary

def binary_to_base64(binary):
    """Convertir une suite de bits en chaîne Base64"""
    result = ''
    padding = ''

    # Compléter à un multiple de 6 bits
    while len(binary) % 6 != 0:
        binary += '0'
        padding += '='

    # Convertir chaque groupe de 6 bits
    for i in range(0, len(binary), 6):
        sextet = binary[i:i+6]
        index = int(sextet, 2)
        result += BASE64_CHARS[index]

    # Ajouter le padding '=' si nécessaire
    if padding:
        result = result[:-len(padding)] + padding
    return result

def base64_to_binary(data):
    """Convertir une chaîne Base64 en suite de bits correcte"""
    padding = data.count('=')  # Compter le nombre de caractères '='
    data = data.rstrip('=')  # Retirer les '=' pour le traitement

    binary = ''
    for char in data:
        index = BASE64_CHARS.index(char)
        binary += format(index, '06b')  # Convertir chaque caractère Base64 en 6 bits

    # Supprimer les bits inutiles ajoutés pour le padding
    if padding:
        binary = binary[:-(padding * 2)]  # Chaque '=' correspond à 2 bits inutiles

    return binary

def binary_to_string(binary):
    """Convertir une suite de bits en chaîne de caractères"""
    text = ''
    for i in range(0, len(binary), 8):
        byte = binary[i:i+8]
        if len(byte) == 8:
            text += chr(int(byte, 2))
    return text

def encode_text(text):
    """Encoder du texte Unicode en Base64"""
    binary = string_to_binary(text)
    return binary_to_base64(binary)

def decode_text(base64_text):
    """Décoder du Base64 en texte Unicode"""
    binary = base64_to_binary(base64_text)
    return binary_to_string(binary)

def main():
    print("Base64 Encoder/Decoder (Texte uniquement)")
    choice = input("Voulez-vous (e)ncode(r) ou (d)ecode(r) ? ").lower()

    if choice == 'e':
        text = input("Entrez le texte à encoder : ")
        encoded = encode_text(text)
        print("Texte encodé Base64 :", encoded)
    elif choice == 'd':
        base64_text = input("Entrez le texte Base64 à décoder : ")
        decoded = decode_text(base64_text)
        print("Texte décodé :", decoded)
    else:
        print("Choix invalide.")

# Test
encoded = encode_text("Bonjour, ceci est un test.")
print("Encodé :", encoded)

decoded = decode_text(encoded)
print("Décodé :", decoded)

if __name__ == "__main__":
    main()
