/*
Выяснить, самые популярные типы файлов, с которыми вы работаете. Создать функцию, которая принимает массив файлов.
Функция должна вернуть массив самых популярных типов файлов. Элементы результирующего массива должны быть отсортированы
в алфавитном порядке.

Done:
['crazy.pr', 'black-and-white.als', 'illegal.wav', 'exultant.mp3', 'exotic.jar', 'capricious.pt', 'abundant.ala', 'eatable.zbrush', 'careful.py', 'godly.css', 'clever.txt', 'dusty.maya', 'awesome.zbrush', 'discreet.jar', 'creepy.h', 'fair.pt', 'descriptive.mp3', 'boundless.ala', 'berserk.xml', 'hungry.exe', 'awful.exe']
Expect:
    ['.ala', '.exe', '.jar', '.mp3', '.pt', '.zbrush']

Done
    ['hanging.h', 'fixed.ala', 'first.pr', 'cooperative.cpp', 'elfin.zbrush', 'fair.pr', 'cool.css', 'highfalutin.py', 'alcoholic.maya', 'heady.cpp', 'befitting.wav', 'certain.jar', 'glistening.exe', 'attractive.wav', 'gruesome.wp', 'happy.txt', 'finicky.jar', 'clumsy.js', 'assorted.js', 'highfalutin.cpp', 'damaging.h', 'ethereal.xml', 'great.jar', 'dead.wp', 'acoustic.xml', 'devilish.css', 'curly.pt', 'exuberant.ala', 'flippant.wp', 'holistic.html', 'cut.txt', 'adamant.py', 'dashing.zbrush', 'conscious.wp', 'black-and-white.cpp', 'elated.pt', 'high-pitched.exe', 'flowery.xml', 'glib.wp', 'industrious.html', 'arrogant.zbrush', 'accessible.html', 'classy.jar', 'acceptable.maya', 'cynical.pt', 'erratic.pt', 'earthy.als', 'dramatic.als', 'bite-sized.py', 'ahead.xml', 'giddy.js', 'fortunate.txt', 'early.txt', 'imaginary.wav', 'cute.zbrush', 'graceful.html', 'far-flung.Ue4', 'goofy.exe', 'abundant.mp3', 'ambitious.txt', 'gigantic.jar', 'abashed.xml', 'guiltless.Ue4', 'adventurous.py', 'guarded.jar', 'extra-large.zbrush', 'filthy.h', 'easy.zbrush', 'glorious.als', 'detailed.pr', 'flashy.zbrush', 'breezy.als', 'faithful.py', 'curly.js', 'chief.js', 'concerned.js', 'cumbersome.zbrush', 'ahead.maya', 'berserk.cpp', 'deserted.pt', 'cool.zbrush', 'broken.cpp', 'glossy.pt', 'deep.xml', 'average.wav', 'dangerous.cpp', 'acrid.wav', 'dear.zbrush', 'deeply.pr', 'detailed.cpp', 'friendly.h', 'first.css', 'heady.exe', 'far-flung.als', 'erratic.mp3', 'exciting.pr']
Expect
    ['.zbrush']

Done
    ['dramatic.txt', 'incompetent.jar', 'alcoholic.wp', 'clumsy.py', 'abject.h', 'boring.exe', 'aloof.pr', 'familiar.py', 'fanatical.py', 'ill-informed.html', 'fierce.pr', 'accurate.html', 'grotesque.pr', 'brown.py', 'courageous.pt', 'grouchy.jar', 'giant.pt', 'dirty.h', 'abaft.jar', 'enormous.zbrush', 'creepy.cpp', 'beneficial.py', 'absorbing.ala', 'heartbreaking.html', 'exclusive.js', 'fluttering.html', 'happy.als', 'fresh.pr', 'adamant.txt', 'awful.maya', 'frightening.maya', 'bizarre.html', 'efficacious.exe', 'illegal.wav', 'dizzy.js', 'gusty.wp', 'delightful.pt', 'full.als', 'chivalrous.xml', 'filthy.js', 'functional.jar', 'conscious.wav', 'feeble.exe', 'hilarious.cpp', 'earthy.py', 'handy.txt', 'hollow.cpp', 'aggressive.js', 'fat.h', 'drunk.exe', 'clear.h', 'easy.wav', 'eatable.pt', 'grumpy.css', 'empty.exe', 'brief.jar', 'aggressive.txt', 'aggressive.txt', 'gruesome.ala', 'awake.txt', 'apathetic.mp3', 'holistic.pt', 'embarrassed.css', 'flashy.maya', 'exultant.ala', 'exuberant.exe', 'graceful.pt', 'dependent.py', 'gigantic.wp', 'husky.js', 'immense.pr', 'defiant.cpp', 'cooperative.html', 'frantic.maya', 'abashed.css', 'dysfunctional.h', 'gusty.js', 'dynamic.txt', 'dreary.pt', 'giddy.ala', 'exciting.css', 'best.als', 'humdrum.css', 'busy.jar', 'frail.cpp', 'cagey.wav']
Expect
    ['.pt', '.py', '.txt']
*/

function getPopularFiles(arrayOfFiles) {
    const extensions = new Map();

    arrayOfFiles
        .map(item => "." + item.split(".")[1])
        .forEach(item => {
            if (extensions.has(item)) {
                extensions.set(item, extensions.get(item) + 1);
            } else {
                extensions.set(item, 1);
            }
        });

    const max = Math.max(...extensions.values());
    //alternative IterableIterator to array
    // const max = Math.max(...Array.from(extensions.values()));

    const entries = Array.from(extensions.entries());

    return entries.filter(item => item[1] === max).map(value => value[0]).sort()
}

const files1 = ['crazy.pr', 'black-and-white.als', 'illegal.wav', 'exultant.mp3', 'exotic.jar', 'capricious.pt',
    'abundant.ala', 'eatable.zbrush', 'careful.py', 'godly.css', 'clever.txt', 'dusty.maya', 'awesome.zbrush',
    'discreet.jar', 'creepy.h', 'fair.pt', 'descriptive.mp3', 'boundless.ala', 'berserk.xml', 'hungry.exe', 'awful.exe'];
console.log(getPopularFiles(files1)); //['.ala', '.exe', '.jar', '.mp3', '.pt', '.zbrush']

const files2 = ['hanging.h', 'fixed.ala', 'first.pr', 'cooperative.cpp', 'elfin.zbrush', 'fair.pr', 'cool.css',
    'highfalutin.py', 'alcoholic.maya', 'heady.cpp', 'befitting.wav', 'certain.jar', 'glistening.exe', 'attractive.wav',
    'gruesome.wp', 'happy.txt', 'finicky.jar', 'clumsy.js', 'assorted.js', 'highfalutin.cpp', 'damaging.h',
    'ethereal.xml', 'great.jar', 'dead.wp', 'acoustic.xml', 'devilish.css', 'curly.pt', 'exuberant.ala', 'flippant.wp',
    'holistic.html', 'cut.txt', 'adamant.py', 'dashing.zbrush', 'conscious.wp', 'black-and-white.cpp', 'elated.pt',
    'high-pitched.exe', 'flowery.xml', 'glib.wp', 'industrious.html', 'arrogant.zbrush', 'accessible.html', 'classy.jar',
    'acceptable.maya', 'cynical.pt', 'erratic.pt', 'earthy.als', 'dramatic.als', 'bite-sized.py', 'ahead.xml',
    'giddy.js', 'fortunate.txt', 'early.txt', 'imaginary.wav', 'cute.zbrush', 'graceful.html', 'far-flung.Ue4',
    'goofy.exe', 'abundant.mp3', 'ambitious.txt', 'gigantic.jar', 'abashed.xml', 'guiltless.Ue4', 'adventurous.py',
    'guarded.jar', 'extra-large.zbrush', 'filthy.h', 'easy.zbrush', 'glorious.als', 'detailed.pr', 'flashy.zbrush',
    'breezy.als', 'faithful.py', 'curly.js', 'chief.js', 'concerned.js', 'cumbersome.zbrush', 'ahead.maya', 'berserk.cpp',
    'deserted.pt', 'cool.zbrush', 'broken.cpp', 'glossy.pt', 'deep.xml', 'average.wav', 'dangerous.cpp', 'acrid.wav',
    'dear.zbrush', 'deeply.pr', 'detailed.cpp', 'friendly.h', 'first.css', 'heady.exe', 'far-flung.als', 'erratic.mp3',
    'exciting.pr'];
console.log(getPopularFiles(files2)); //['.zbrush']

const files3 = ['dramatic.txt', 'incompetent.jar', 'alcoholic.wp', 'clumsy.py', 'abject.h', 'boring.exe', 'aloof.pr',
    'familiar.py', 'fanatical.py', 'ill-informed.html', 'fierce.pr', 'accurate.html', 'grotesque.pr', 'brown.py',
    'courageous.pt', 'grouchy.jar', 'giant.pt', 'dirty.h', 'abaft.jar', 'enormous.zbrush', 'creepy.cpp',
    'beneficial.py', 'absorbing.ala', 'heartbreaking.html', 'exclusive.js', 'fluttering.html', 'happy.als',
    'fresh.pr', 'adamant.txt', 'awful.maya', 'frightening.maya', 'bizarre.html', 'efficacious.exe', 'illegal.wav',
    'dizzy.js', 'gusty.wp', 'delightful.pt', 'full.als', 'chivalrous.xml', 'filthy.js', 'functional.jar',
    'conscious.wav', 'feeble.exe', 'hilarious.cpp', 'earthy.py', 'handy.txt', 'hollow.cpp', 'aggressive.js',
    'fat.h', 'drunk.exe', 'clear.h', 'easy.wav', 'eatable.pt', 'grumpy.css', 'empty.exe', 'brief.jar', 'aggressive.txt',
    'aggressive.txt', 'gruesome.ala', 'awake.txt', 'apathetic.mp3', 'holistic.pt', 'embarrassed.css', 'flashy.maya',
    'exultant.ala', 'exuberant.exe', 'graceful.pt', 'dependent.py', 'gigantic.wp', 'husky.js', 'immense.pr',
    'defiant.cpp', 'cooperative.html', 'frantic.maya', 'abashed.css', 'dysfunctional.h', 'gusty.js', 'dynamic.txt',
    'dreary.pt', 'giddy.ala', 'exciting.css', 'best.als', 'humdrum.css', 'busy.jar', 'frail.cpp', 'cagey.wav'];
console.log(getPopularFiles(files3)); // ['.pt', '.py', '.txt']