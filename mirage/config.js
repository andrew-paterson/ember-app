import ENV from '../config/environment';

export default function () {
  this.urlPrefix = `${ENV.apiProtocol}${ENV.apiHost}`;
  this.namespace = ENV.namespace;

  this.get('index', function() {
    
    return {foo: 'bar'};
  });

  this.passthrough();
}
