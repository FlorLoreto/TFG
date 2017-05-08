from nltk.stem import SnowballStemmer
stemmer = SnowballStemmer('spanish')
word=['ataque','atacar','ataco','atacante','atacado','ataqué']
StemContent = [stemmer.stem(word).upper() for word in word]
print(StemContent)
