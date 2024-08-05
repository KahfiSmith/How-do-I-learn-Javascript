{
    const url = "https://contoh.com/?name=kahfi smith"
    console.log(url)

    const encoded = encodeURI(url)
    console.log(encoded)

    const decoded = decodeURI(encoded)
    console.log(decoded)
} 

{   
    const value = 'kahfi&el=smith'
    const url = 'hht://www.contoh.com/?name='

    const encoded = encodeURIComponent(value)
    console.log(url + encoded)

    const decoded = decodeURIComponent(encoded)
    console.log(url + decoded)
}