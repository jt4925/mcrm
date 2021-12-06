import {
  trigger,
  animate,
  transition,
  style,
  query,
  group,
  state
} from '@angular/animations';


export const fadeAnimation = trigger('fadeAnimation', [

 // the "in" style determines the "resting" state of the element when it is visible.
 state('in', style({opacity: 1})),

 // fade in when created. this could also be written as transition('void => *')
 transition(':enter', [
   style({opacity: 0}),
   animate('.3s' )
 ]),

 // fade out when destroyed. this could also be written as transition('void => *')
 transition(':leave',
   animate('.3s', style({opacity: 0})))


]);

// import {
//   trigger,
//   animate,
//   transition,
//   style,
//   query,
//   group,
//   state
// } from '@angular/animations';


// export const fadeAnimation = trigger('fadeAnimation', [

//  // the "in" style determines the "resting" state of the element when it is visible.
//  state('in', style({opacity: 1})),

//  // fade in when created. this could also be written as transition('void => *')
//  transition(':enter', [
//    style({opacity: 0}),
//    animate('.3s' )
//  ]),

//  // fade out when destroyed. this could also be written as transition('void => *')
//  transition(':leave',
//    animate('.3s', style({opacity: 0})))

// ]);

// export const fadeInAnimation =
//      trigger('fadeInAnimation', [

//         state('void', style({ position: 'absolute', width: '100%', height: '100%', opacity: 0 })),
//         state('*', style({ position: 'absolute', width: '100%', height: '100%', opacity: 1 })),

//         transition(':enter', [
//             style({ transform: 'translateY(20%)', opacity: 0 }),
//             animate('0.8s ease-in-out', style({ transform: 'translateY(0%)', opacity: 1 }))
//         ]),

//         transition(':leave', [
//             style({ transform: 'translateY(0%)' }),
//             animate('0.8s ease-in-out', style({ transform: 'translateY(-20%)', opacity: 0 }))
//         ])

//     ]);
