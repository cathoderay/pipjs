
load('/opt/visionmedia-jspec-df48355/lib/jspec.js')
load('/opt/visionmedia-jspec-df48355/lib/jspec.xhr.js')
load('lib/pipjs.js')
load('spec/unit/spec.helper.js')

JSpec
.exec('spec/unit/spec.js')
.run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures' })
.report()
