# Remove animations from remaining components
$componentsPath = "c:\Users\Nishad\Desktop\Squad Innovetors\squad-innovetors\components"

$files = @(
    'WhiteLabelService.js',
    'TestimonialSection.js',
    'StrategySection.js',
    'IndustryExpertises.js',
    'FAQSection.js',
    'BlogList.js',
    'CTASection.js'
)

foreach ($file in $files) {
    $filePath = Join-Path $componentsPath $file
    if (Test-Path $filePath) {
        Write-Host "Processing: $file" -ForegroundColor Green
        $content = Get-Content $filePath -Raw
        
        # Remove import statements
        $content = $content -replace "import AnimatedGradient from './backgrounds/AnimatedGradient';", ''
        $content = $content -replace "import FloatingShapes from './backgrounds/FloatingShapes';", ''
        $content = $content -replace "import GridPattern from './backgrounds/GridPattern';", ''
        $content = $content -replace "import GeometricShapes from './backgrounds/GeometricShapes';", ''
        $content = $content -replace "import MouseGlow from './backgrounds/MouseGlow';", ''
        $content = $content -replace "import WavyLines from './backgrounds/WavyLines';", ''
        $content = $content -replace "import CodeRain from './backgrounds/CodeRain';", ''
        
        # Remove JSX usage (single line)
        $content = $content -replace '\s*<AnimatedGradient[^>]*/>', '<parameter name="Complexity">2
