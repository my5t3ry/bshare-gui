declare var ENV: string;
declare var HMR: boolean;
declare var module: NodeModule;
declare var System: SystemJS;
declare module 'stompjs';
declare module 'sockjs-client';
interface NodeModule {
  id: string;
}

interface SystemJS {
  import: (path?: string) => Promise<any>;
}
