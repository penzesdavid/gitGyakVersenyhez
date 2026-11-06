import webview

# Szebb, modern méretezésű ablak
webview.create_window(
    title='Modern UI App',
    url='index.html',
    width=460,
    height=540,
    resizable=False
)
webview.start()
