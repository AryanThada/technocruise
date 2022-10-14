const carouselData = [
    {
        id: 0,
        img:'https://s3-alpha-sig.figma.com/img/04bd/e31b/f322cb731f32d5ec2ee7694f6953bc11?Expires=1661731200&Signature=hQDPLW5R~8jlN08B3c5ugOtXscm6jYAlqPxSEwKVB-hFq7XR6je-hueTfbIpDwpUOIJek~gFzs8pw8PQHDmjSu-jbs7qf6rmgfffq2OOvGJ2mz5Z47vb4Yr7ALdZIYCzRfZVvb~zmDTrxfX2YgySH9zsiIRPPO08g2EX3CX4GutpUtCJ0w9jH2gZcknCnIqsjRKfeHqDFD96gA-HIJDHqr2299yGARGWpgMdQYJVtrIURcS9pt4o4uafjZulswjj0KlCUxWn3RwSM4WniE7LOndHpKAxcAUXEQ2PbMFgcuHTTnuMEjN8D0KpxNJX2~fu4iJ586kPqL0NI1oHVwPVMw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        city: 'Lucknow',
        date: '23-24 October',
    },
    {   
        id: 1,
        img:'https://s3-alpha-sig.figma.com/img/4eb2/3691/7ebeebe53de09345083d980161a8108d?Expires=1661731200&Signature=FJjdAGv9RYb4HHjL4dCma5NGlW7q-O2j9-mgL-kXgA3rWR34ogziZ-J6p5Pg1u1a6Ziq3RvkypZrKBrswGEyGMiF7sogeW1-cwy9MbeRI5JT5jWqPXplOamBzj39YnOkgH4xrkYd7jJ4VXKXiaCNJpKUkVKvz1ePk2D4hcmxxBHy5NcMCzcg9-8r1wo8gmxb4cWzjISFhrdD1~Zf~pmg04L5H5hebg4KkNHii7gd6Yj-z7QJCLiDftGyo3QfERY4SLJRlPBkABNhq13AZ81DvFaaTVMuXF73RtWooefruvIV4BmgBrZhSH9ABmWJHd3Y01RIYHnMqUbYnqlqrMWnPw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        city: 'Mumbai',
        date: '23-24 October',
    },
    {
        id:2,
        img:'https://s3-alpha-sig.figma.com/img/8c3a/37bc/f8e6d8104cf5e34b56ae6b5115691d74?Expires=1661731200&Signature=SCcj8flDLeSo2APdU9Y82ZZrLNxLD0f0ffBIO3c8LAZPzd88HTEZonI1LZugxbxx6EFvDsunDB6ThpzkIm73PVViGZSl~XFQKm3PIo6MskIzn1vbVB2E1rr8shKMwO~cz7kb4W0FsJKmXiC8R1akM9UhhJmSUdCCC3aDKBb8j~lcyFZ6X49VnOwEH6Mt~B7Em93br9ux0wITTGUhNjrEChDNwVyNswXNxMCjchYVFNNoTWRBhvIVbwqrEJeZGzNMa4lxdFIx1Qdr-FXMsMmLsQ4~2mwPb2PKyb43IASDc5yiEP3gAZPO0uM3hCGMCfcCgwWcEwwKPvmbUFek2MRwjQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        city: 'Bangalore',
        date: '23-24 October',
    },
    {
        id:3,
        img:'https://s3-alpha-sig.figma.com/img/8c3a/37bc/f8e6d8104cf5e34b56ae6b5115691d74?Expires=1661731200&Signature=SCcj8flDLeSo2APdU9Y82ZZrLNxLD0f0ffBIO3c8LAZPzd88HTEZonI1LZugxbxx6EFvDsunDB6ThpzkIm73PVViGZSl~XFQKm3PIo6MskIzn1vbVB2E1rr8shKMwO~cz7kb4W0FsJKmXiC8R1akM9UhhJmSUdCCC3aDKBb8j~lcyFZ6X49VnOwEH6Mt~B7Em93br9ux0wITTGUhNjrEChDNwVyNswXNxMCjchYVFNNoTWRBhvIVbwqrEJeZGzNMa4lxdFIx1Qdr-FXMsMmLsQ4~2mwPb2PKyb43IASDc5yiEP3gAZPO0uM3hCGMCfcCgwWcEwwKPvmbUFek2MRwjQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        city: 'Kanpur',
        date: '23-24 October',
    },
    {
        id:2,
        img:'https://s3-alpha-sig.figma.com/img/8c3a/37bc/f8e6d8104cf5e34b56ae6b5115691d74?Expires=1661731200&Signature=SCcj8flDLeSo2APdU9Y82ZZrLNxLD0f0ffBIO3c8LAZPzd88HTEZonI1LZugxbxx6EFvDsunDB6ThpzkIm73PVViGZSl~XFQKm3PIo6MskIzn1vbVB2E1rr8shKMwO~cz7kb4W0FsJKmXiC8R1akM9UhhJmSUdCCC3aDKBb8j~lcyFZ6X49VnOwEH6Mt~B7Em93br9ux0wITTGUhNjrEChDNwVyNswXNxMCjchYVFNNoTWRBhvIVbwqrEJeZGzNMa4lxdFIx1Qdr-FXMsMmLsQ4~2mwPb2PKyb43IASDc5yiEP3gAZPO0uM3hCGMCfcCgwWcEwwKPvmbUFek2MRwjQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        city: 'Delhi',
        date: '23-24 October',
    },
    {
        id:2,
        img:'https://s3-alpha-sig.figma.com/img/8c3a/37bc/f8e6d8104cf5e34b56ae6b5115691d74?Expires=1661731200&Signature=SCcj8flDLeSo2APdU9Y82ZZrLNxLD0f0ffBIO3c8LAZPzd88HTEZonI1LZugxbxx6EFvDsunDB6ThpzkIm73PVViGZSl~XFQKm3PIo6MskIzn1vbVB2E1rr8shKMwO~cz7kb4W0FsJKmXiC8R1akM9UhhJmSUdCCC3aDKBb8j~lcyFZ6X49VnOwEH6Mt~B7Em93br9ux0wITTGUhNjrEChDNwVyNswXNxMCjchYVFNNoTWRBhvIVbwqrEJeZGzNMa4lxdFIx1Qdr-FXMsMmLsQ4~2mwPb2PKyb43IASDc5yiEP3gAZPO0uM3hCGMCfcCgwWcEwwKPvmbUFek2MRwjQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        city: 'Kolkata',
        date: '23-24 October',
    }
]

export default carouselData