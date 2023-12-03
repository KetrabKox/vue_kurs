# Aplikacja Webowa Vue

Aby uruchmić aplikację należy:

1. Stworzyć .env w folderze backend i wprowadzić tam wartości:

```
    URL - adres do API
    LOGIN - login do API
    PASS - hasło do APi
    MY_NUMBER - numer, kóry będzie odbierał połączenia
```

2. Stworzyć .env w folderze front i wprowadzić wartość:
   ```
   VUE_APP_URL - adres do backendu
   ```
3. Uruchomić poniższy skrypt w folderze głównym:

```
docker compose up
```

Zmiany, które zostały wprowadzone po kursie:

- Zmieniono wygląd aplikacji
- Dodano Dockera
- Formatowanie numeru przy wpisywaniu
- Dodanie trybu ciemnego oraz przycisku dla niego
- Dodano historię połączeń oraz modala dla niego
- Obsłużono statusy 'FAILD', 'BUSY', 'NO ANSWER'
- Blokadę na inne widoki niż główny
- Blokadę wpisywania niepoprawnego numeru telefonu
- Dodanie timera podczas i na końcu rozmowy
- Dodanie animacji oraz grafik
