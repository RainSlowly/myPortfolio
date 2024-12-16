import { trigger, style, transition, animate, group, query, animateChild, state } from '@angular/animations';

export const projectAnimation = trigger('projectAnimation', [
  state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
  state('hidden', style({ opacity: 0, transform: 'translateY(130%)' })),

  transition('visible => hidden', [animate('400ms 200ms ease-in')]),
  transition('hidden => visible', [animate('600ms ease-out')])
]);

export const projectAltAnimation = trigger('projectAltAnimation', [
  state('visible', style({ opacity: 1,'z-index':'20'})),
  state('hidden', style({ opacity: 0 , top:'130%', 'z-index':'20' })),

  transition('visible => hidden', [animate('400ms 100ms ease-in')]),
  transition('hidden => visible', [animate('600ms 100ms ease-out')])
]);

export const tapeAnimation = trigger('tapeAnimation', [
  transition(':enter', [
    style({ transform: 'translate(100%,-90%) scale(1.3)', opacity: 0 }),
    animate('160ms 600ms ease-out', style({ transform: 'translate(0,0) scale(1)', opacity: 1 }))
  ]),
  transition('visible => hidden', [
    animate('300ms ease-in', style({ transform: 'translate(30%,-30%)', opacity: 0 }))
  ])
]);

export const paperFAnimation = trigger('paperFAnimation', [
  transition(':enter', [
    group([
      style({ transform: 'translate(150%,-150%) scale(1.3) rotate(-15deg)', opacity: 0 }),
      animate('400ms 200ms ease-out', style({ transform: 'translate(0,0) scale(1) rotate(-15deg)', opacity: 1 })),
      query('@tapeAnimation', animateChild(), { optional: true }) 
    ])]),
     transition('* => project2', [
      style({ opacity: 1 }),
      animate('500ms ease-in', style({ transform: 'translateY(100%)', opacity: 0 }))
    ]),
    transition('* => project3', [
      animate('300ms ease-in', style({ transform: 'translateY(-100%)', opacity: 0 }))
    ])
]);

export const paperlinedAnimation = trigger('paperlinedAnimation', [
  transition(':enter', [
    style({ transform: 'translate(70%,-90%) scale(2) rotate(-2deg)', opacity: 0 }),
    animate('400ms 0ms ease-out', style({ transform: 'translateY(0) scale(1) rotate(-2deg)', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateY(50%)', opacity: 0 }))
  ])
]);

export const  postItAnimation= trigger('postItAnimation', [
  transition(':enter', [
    group([
      style({ transform: 'translate(150%,-150%) scale(1.3) rotate(10deg)', opacity: 0 }),
      animate('400ms 120ms ease-out', style({ transform: 'translate(0,0) scale(1) rotate(10deg)', opacity: 1 })),
      query('@pinAnimation', animateChild(), { optional: true }) 
    ])
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateY(50%)', opacity: 0 }))
  ])
]);

export const  pinAnimation= trigger('pinAnimation', [
  transition(':enter', [
    style({ transform: 'translate(140%,-90%) scale(1.5)', opacity: 0 }),
    animate('80ms 800ms ease-out', style({ transform: 'translate(0,0) scale(1)', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateY(50%)', opacity: 0 }))
  ])
]);

export const paperFAnimation3 = trigger('paperFAnimation3', [
  transition(':enter', [
    group([
      style({ transform: 'translate(150%,-150%) scale(1.3) rotate(-15deg)', opacity: 0 }),
      animate('400ms 200ms ease-out', style({ transform: 'translate(0,0) scale(1) rotate(-15deg)', opacity: 1 })),
      query('@tapeAnimation', animateChild(), { optional: true }) 
    ])]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateY(50%) rotate(-15deg);', opacity: 0 }))
  ])
]);

export const paperNotepadAnimation = trigger('paperNotedAnimation', [
  transition(':enter', [
    style({ transform: 'translate(70%,-90%) scale(2) rotate(-2deg)', opacity: 0 }),
    animate('400ms 0ms ease-out', style({ transform: 'translateY(0) scale(1) rotate(-2deg)', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateY(50%)', opacity: 0 }))
  ])
]);

export const paperNotepadAltAnimation = trigger('paperNotepadAltAnimation', [
  transition(':enter', [
    style({ transform: 'translate(70%,-90%) scale(2) rotate(1deg)', opacity: 0 }),
    animate('350ms  200ms ease-out', style({ transform: 'translateY(0) scale(1) rotate(1deg)', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateY(50%)', opacity: 0 }))
  ])
]);

export const paperFAnimation4 = trigger('paperFAnimation4', [
  transition(':enter', [
    group([
      style({ transform: 'translate(150%,-150%) scale(1.3) rotate(-5deg)', opacity: 0 }),
      animate('400ms 500ms ease-out', style({ transform: 'translate(0,0) scale(1) rotate(-5deg)', opacity: 1 })),
      query('@tapeAnimation2', animateChild(), { optional: true }) 
    ])]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateY(50%) rotate(-5deg)', opacity: 0 }))
  ])
]);

export const tapeAnimation2 = trigger('tapeAnimation2', [
  transition(':enter', [
    style({ transform: 'translate(100%,-90%) scale(1.3) rotate(-19deg)', opacity: 0 }),
    animate('160ms 800ms ease-out', style({ transform: 'translate(0,0) scale(1) rotate(-19deg)', opacity: 1 }))
  ]),
]);

export const segnaAnimation = trigger('segnaAnimation', [
  transition(':enter', [
    style({ transform: 'translate(100%,-90%) scale(1.8) ', opacity: 0 }),
    animate('300ms 200ms ease-out', style({ transform: 'translate(0,0) scale(1) ', opacity: 1 }))
  ]),
 
]);

export const paperFAnimation2 = trigger('paperFAnimation2', [
  transition(':enter', [
    group([
      style({ transform: 'translate(150%,-150%) scale(1.3) rotate(-11deg)', opacity: 0 }),
      animate('400ms 200ms ease-out', style({ transform: 'translate(0,0) scale(1) rotate(-11deg)', opacity: 1 })),
      query('@tapeAnimation', animateChild(), { optional: true }) 
    ])]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateY(50%) rotate(-11deg);', opacity: 0 }))
  ])
]);

export const  postItAnimation2= trigger('postItAnimation2', [
  transition(':enter', [
    group([
      style({ transform: 'translate(150%,-150%) scale(1.3) rotate(-1deg)', opacity: 0 }),
      animate('400ms 120ms ease-out', style({ transform: 'translate(0,0) scale(1) rotate(-1deg)', opacity: 1 })),
      query('@pinAnimation', animateChild(), { optional: true }) 
    ])
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateY(50%)', opacity: 0 }))
  ])
]);

export const paperPokeAnimation = trigger('paperPokeAnimation', [
  transition(':enter', [
    style({ transform: 'translate(70%,-90%) scale(2) ', opacity: 0 }),
    animate('400ms 0ms ease-out', style({ transform: 'translateY(0) scale(1)', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateY(50%)', opacity: 0 }))
  ])
]);

export const segnaAnimation2 = trigger('segnaAnimation2', [
  transition(':enter', [
    style({ transform: 'translate(100%,-90%) scale(1.8) ', opacity: 0 }),
    animate('200ms 600ms ease-out', style({ transform: 'translate(0,0) scale(1) ', opacity: 1 }))
  ]),
 
]);