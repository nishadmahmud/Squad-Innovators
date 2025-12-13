# Performance Optimization Script
# This script removes background animations from multiple components

$componentsPath = "c:\Users\Nishad\Desktop\Squad Innovetors\squad-innovetors\components"

$componentsToFix = @(
    'StepCards.js',
    'WhiteLabelService.js',
    'TestimonialSection.js',
    'StrategySection.js',
    'IndustryExpertises.js',
    'FAQSection.js',
    'BlogList.js'
)

$importsToRemove = @(
    "import AnimatedGradient from './backgrounds/AnimatedGradient';",
    "import FloatingShapes from './backgrounds/FloatingShapes';",
    "import GridPattern from './backgrounds/GridPattern';",
    "import GeometricShapes from './backgrounds/GeometricShapes';",
    "import MouseGlow from './backgrounds/MouseGlow';",
    "import WavyLines from './backgrounds/WavyLines';",
    "import CodeRain from './backgrounds/CodeRain';"
)

foreach ($component in $componentsToFix) {
    $filePath = Join-Path $componentsPath $component
    if (Test-Path $filePath) {
        Write-Host "Processing: $component" -ForegroundColor Green
        $content = Get-Content $filePath -Raw
        
        # Remove import statements
        foreach ($import in $importsToRemove) {
            $content = $content -replace [regex]::Escape($import), ''
        }
        
        # Clean up empty lines
        $content = $content -replace "(\r?\n){3,}", "`r`n`r`n"
        
        Set-Content $filePath $content -NoNewline
        Write-Host "  ✓ Removed imports from $component" -ForegroundColor Cyan
    }
}

Write-Host "`nDone! Processed $($componentsToFix.Count) components" -ForegroundColor Yellow
