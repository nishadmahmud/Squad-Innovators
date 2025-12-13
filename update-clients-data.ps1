$file = "lib\clientsData.js"
$content = Get-Content $file -Raw

# Replace all PNG references with WebP
$replacements = @{
    '"/gadgetBodda.png"'                   = '"/gadgetBodda.webp"'
    '"/[www.gadgetboddaa.com].png"'        = '"/[www.gadgetboddaa.com].webp"'
    '"/celtelbd.png"'                      = '"/celtelbd.webp"'
    '"/[www.celtelbd.com].png"'            = '"/[www.celtelbd.com].webp"'
    '"morshedmart.png"'                    = '"morshedmart.webp"'
    '"/[www.morshedmart.com].png"'         = '"/[www.morshedmart.com].webp"'
    '"/EmusFashion.png"'                   = '"/EmusFashion.webp"'
    '"/[www.emusfashion.com].png"'         = '"/[www.emusfashion.com].webp"'
    '"/Brothers Mobile & Accessories.png"' = '"/Brothers Mobile & Accessories.webp"'
    '"/Outlet Expense.png"'                = '"/Outlet Expense.webp"'
    '"/[www.outletexpense.com].png"'       = '"/[www.outletexpense.com].webp"'
    '"/Apple Daddy.png"'                   = '"/Apple Daddy.webp"'
    '"/[www.appledaddybd.com].png"'        = '"/[www.appledaddybd.com].webp"'
    '"/Perfect Gadget BD.png"'             = '"/Perfect Gadget BD.webp"'
    '"/Taiba Mart.png"'                    = '"/Taiba Mart.webp"'
    '"/[www.taibamart.com].png"'           = '"/[www.taibamart.com].webp"'
    '"/PixelBD.png"'                       = '"/PixelBD.webp"'
    '"/[www.gpixelbd.com].png"'            = '"/[www.gpixelbd.com].webp"'
    '"/MKS Outfit.png"'                    = '"/MKS Outfit.webp"'
    '"/[www.mksoutfit.com].png"'           = '"/[www.mksoutfit.com].webp"'
    '"/EmusCreation.png"'                  = '"/EmusCreation.webp"'
    '"/[emuscreation.vercel.app].png"'     = '"/[emuscreation.vercel.app].webp"'
    '"/Apple Dream BD.png"'                = '"/Apple Dream BD.webp"'
    '"/[apple-dream-bd.vercel.app].png"'   = '"/[apple-dream-bd.vercel.app].webp"'
    '"/Apple Nation BD.png"'               = '"/Apple Nation BD.webp"'
    '"/[apple-nation-bd.vercel.app].png"'  = '"/[apple-nation.vercel.app].webp"'
}

foreach ($key in $replacements.Keys) {
    $content = $content.Replace($key, $replacements[$key])
}

Set-Content $file $content -NoNewline
Write-Host "✅ Updated clientsData.js - replaced all PNG with WebP" -ForegroundColor Green
