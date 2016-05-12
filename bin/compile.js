import fse from 'fs-extra'
import _debug from 'debug'
import webpackConfig from '../webpack.config'
import webpackCompiler from './webpack-compiler'
import path from 'path'

const debug = _debug('app:bin:compile')

;(async () => {
    try{
        debug('compile start...')
        fse.removeSync(path.join(__dirname,'../','dist','/*'))
        debug('clean up dist folder')
        const stats = await webpackCompiler(webpackConfig)
        if(stats.warnings.length){
            debug('Config set to fail on warning, exiting with status code "1".')
            process.exit(1)
        }   
        fse.copySync(path.join(__dirname,'../','/static'),path.join(__dirname,'../','/dist'))
        debug('Copy static assets to dist folder.')        
    }catch (e){
        debug('Compiler encountered an error.', e)
        process.exit(1)
    }
})()