export const dateFormatter = (date: string) => {
    const dateFormat = new Date(date)

    const formattedDatetimeStr = dateFormat
        .toLocaleString('id-ID', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        })
        .replace(',', ' -')
        .replace('.', ':')

    return formattedDatetimeStr
}
