import webview

# Egyszerűen betöltjük a helyi index.html fájlt
webview.create_window('Egyszerű App', 'index.html', width=400, height=300)
webview.start()

