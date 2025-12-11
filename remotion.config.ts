import {Config} from '@remotion/cli/config';

Config.setVideoImageFormat('png');
Config.setCodec('h264');
Config.setConcurrency(4);
Config.setOverwriteOutput(true);
Config.setPixelFormat('yuv420p');
Config.setChromiumOpenGlRenderer('angle');
Config.setScale(1);
