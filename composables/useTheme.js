export default function(isDark){
    const theme = useCookie('theme', { maxAge: 1000 * 60 * 60 * 24 * 365 })
    theme.value = isDark !== undefined ? isDark : theme.value || false
    const themeHelper = useState('theme', () => theme.value)
    themeHelper.value = theme.value
    return themeHelper;
}