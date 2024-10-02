const { DragonWings, Dragon } = require('@strix/server')

DragonWings.init()

setTimeout(() => {
    console.log('')
    console.log('')
    console.log('[INITIATE TESTING]')
    console.log('')
    console.log('')

    const success = Dragon.set('test', 'test')
    if (success) {
        console.log('success set')
    }
    Dragon.get('test').then((value) => {
        console.log('[TEST] got value:', value)
        Dragon.del('test')
    })

    console.log('')
    console.log('')
    console.log('[END TESTING]')
    console.log('')
    console.log('')
}, 2000)