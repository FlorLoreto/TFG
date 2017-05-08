'''
añade sinónimos y extrae vocabulario de los tuits que ya están clasificados en odio
'''
# función que obtiene sinónimos de las palabras
def sinonimia(word):
    import nltk
    from nltk.corpus import wordnet as wn
    b=list()
    try:
        a=wn.synsets(word.lower(),lang='spa')
        b=a[0].lemma_names('spa')

        for i, word in enumerate(b):
            try:
                pos=word.index('_')
                del b[i]
                print(word0)
                word1=word[pos+1:]
                word=word0
                b.append(word0)
                b.append(word1)
            except:
                pass
            else:
                b=a[0].lemma_names('spa')
    except:
            b.append(word)
        #si no hay sinónimo devuelvo la misma palabra
    return b

def main():
    from nltk import word_tokenize
    import re,string
    filein='taggedv2_1000'#archivo que contiene los tuits clasificados
    fh=open('L:/TFG/'+filein+'.txt', encoding="utf8")
    fout=open('L:/TFG/Voca_Aum_Odio.txt','w')#Vocabulario aumentado 
    Voca_odio=list()
    for line in fh:
        t=list()
        s=word_tokenize(line.strip('\n'))
        print(s)
        if s[len(s)-1]=='1':
            for i in range (4,len(s)-5):
                t.append(s[i])
            print(t)

            for word in t:
                w=sinonimia(word)
                print('palabra',word.lower(),'sinónimo',w)
                for palabra in w:
                    r=palabra.upper()
                    Voca_odio.append(r)


    file=sorted(set(Voca_odio))

    for i in range (0,len(file)-1):
        r=file[i]
        v=r.upper()
        #elimino acentos y caracteres raros
        r=re.sub(r'([^a-zA-Z\\^ñ^Ñ\n\.])', r'',v)
        if r !='' and r[0]!='.' and 'T.' not in r  and len(r)>1:
            fout.write(r+'\n')
            print (r)
    
    fout.close()
    fh.close()

if __name__ == '__main__':
    main()