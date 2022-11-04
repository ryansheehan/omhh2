import type { EventObject, StateSchema, StateNodeConfig, MachineConfig } from 'xstate';

export enum SLEventType {
    GO = 'GO',
    WARN = 'WARN',
    STOP = 'STOP',
}

export interface SLGoEvent extends EventObject {
    type: SLEventType.GO,
}

export interface SLWarnEvent extends EventObject {
    type: SLEventType.WARN,
}

export interface SLStopEvent extends EventObject {
    type: SLEventType.STOP,
}

export type SLEvents = SLGoEvent | SLWarnEvent | SLStopEvent;

export interface SLContext {
    timeRemaining: number;
}

export interface SLStateSchema extends StateSchema<SLContext> {
    states: {        
        stop: {},
        go: {},
        warn: {},
    }
}

export interface SLOpts {
    goTime: number;
    warnTime: number;
    stopTime: number;
}

const defaultOpts: SLOpts = {
    goTime: 5000,
    warnTime: 1000,
    stopTime: 5000,
};

export function BuildStopLightMachineConfig(options: Partial<SLOpts> = defaultOpts): MachineConfig<SLContext, SLStateSchema, SLEvents> {
    const { goTime, warnTime, stopTime } = {...defaultOpts, ...options};
    return {
        id: 'stoplight',
        initial: 'stop',
        context: {
            timeRemaining: stopTime
        },
        states: {
            stop: {
                
            },
            warn: {

            },
            go: {
                
            },
        },
    }
}
