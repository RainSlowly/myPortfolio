import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {



  italian={
    navigation1:"Progetti",navigation2:"Contatti",
    heroTitle:"<b>Ciao! Sono <br> Simone Zavaglia</b>",heroDescription:"Front-end developer in cerca di esperienza lavorativa.<br> Dinamico, perspicace ed estremamente rapido ad apprendere. ", heroContacts:"<b>Contatti</b>", 
    heroAbility1:"API e Librerie",heroAbility2:"Database non-relazionali",heroImgDescription:" Specializzato in applicazioni sviluppate tramite <b>Angular</b> o <b>Javascript</b> dal design semplice ma moderno.", 
    heroContactMe:"Contattami o visita i miei social", aboutPolaroid:"Sono proprio io",
    aboutDescription:'Mi chiamo Simone e ho <s> 30</s> <span>31</span> anni. Sono un tipo rumoroso e vivace, che ama un sacco di cose e ne odia almeno il doppio.Chi mi conosce dice di me che parlo un casino, sono <s> un precisino</s> <span id="span2">meticoloso</span> e sto sempre al computer.<br> Ma ho anche dei difetti! <br>Stare fermo a non fare nulla mi mette ansia, per questo cerco di dare sempre un senso alle mie giornate in maniera produttiva: <br>Scrivo, programmo, leggo, ascolto o guardo qualcosa che mi <s>fomenti</s> <span id="span3">ispiri </span>.<br> Mi piace imparare cose sempre nuove e migliorare ciò che già conosco, tanto che non riesco a star dietro alle N-mila passioni che ho.<br>Ho la fortuna di avere belle persone accanto che mi ricordano sempre che senza gli altri, senza "gioco di squadra", non si arriva mai lontano.',
    aboutListLove:"<b>Amo</b>",aboutListLove1:"I giochi",aboutListLove2:"Le carte",aboutListLove3:"Il caffè",
    aboutListHate:"<b>Odio</b>",aboutListHate1:"Svegliarmi presto",aboutListHate2:"Il caldo",aboutListHate3:"Chi mi tocca <br>mentre parla",
    proj1Utilized:"<b>Fatto con:</b>Angular, Css, Node.js", proj1Description:'Questo progetto rappresenta il mio lavoro <b>fullstack</b> più completo, integrando ogni aspetto dello sviluppo, dalla grafica al database, per creare un gioco completo con 13 livelli. Il database non relazionale, implementato con <b>Node.js</b> e <b>Mongoose</b>, gestisce dinamicamente musiche, immagini, livelli e dati di gioco. Grazie alla struttura <b>asincrona</b> del codice, i dati vengono salvati e aggiornati in tempo reale.Il sistema sfrutta <b>caricamenti lazy</b> per suoni e immagini, ottimizzando le performance tramite <b>caching</b> e riducendo i tempi di attesa. La modularità dell’intero gioco permette una gestione efficiente dei componenti, mentre le <b>route guards</b> limitano la navigazione in base ai dati dell’utente, offrendo un’esperienza coinvolgente simile a un videogame, ma realizzata come un sito web tramite Angular.',
    proj2Utilized:"<b>Fatto con:</b>Javascript e CSS", proj2Description:'Una settimana dopo aver studiato Javascript ho iniziato questo <b>primo progetto</b> imparando a programmare parallelamente alla sua edificazione.In circa quindici giorni ho creato un giochino <b>one page</b> basato sulli&#39;uso di <b>finestre modali</b> che emula lo stile di un browser game anni 2000/10.I dati sono <b>mockati</b> alli&#39;interno dello script in array di oggetti che tengono conto dei pokemon, delle loro statistiche e delle loro possibili mosse. La gestione delle musiche, dei suoni e delle animazioni è molto basilare ma fa il suo lavoro, con funzioni più complesse create per la gestione delli&#39; <b>IA</b> delli&#39;avversario.<br>Il gioco permette anche di far evolvere i pokémon e smistarli in box con semplicità grazie ai <b>drag and drop</b>.<br> Questo progetto, seppur il mio primo, mi ha insegnato tantissimo ed è come il primo amore:<br> Non si scorda mai.',
    proj3Title:"Sito Vetrina Personale - ZG Model & Actor", proj3Utilized:"<b>Fatto con:</b>Angular, Css, Swiper.js",proj3Description:"Ho sviluppato siti web personali per un attore e un modello, focalizzati su un design minimalista ed elegante. La hero section, realizzata con la libreria Swiper.js, include CTA chiare e dirette per catturare immediatamente l’attenzione. Ogni sezione del sito è animata con elementi semplici ma efficaci, che mantengono leggerezza e fluidità. La sezione dedicata ai ruoli svolti presenta un carosello dinamico in stile piattaforma di streaming, con dati aggiornati in tempo reale. Ho inoltre integrato profili social e contenuti video per garantire un rapido accesso alle principali piattaforme e campagne marketing del soggetto. L’interfaccia consente un contatto diretto e immediato attraverso i canali principali, facilitando richieste di informazioni o opportunità di ingaggio",
    proj4Title:"Sito commerciale - Ace of Cups", proj4Utilized:"<b>Fatto con:</b>Angular, Css", proj4Description:"In questo progetto ho creato una vetrina digitale per un cocktail bar dal carattere mistico, con un’esperienza altamente interattiva realizzata grazie ad animazioni fluide con <b>Angular Animations</b> e dati mockati per simulare un ambiente reale.<br> Il menù consente di visualizzare e gestire gli ordini in modo <b>chiaro</b> e <b>intuitivo</b>, collegandoli al proprio tavolo tramite un<br> <b>codice univoco</b> e monitorando in tempo reale la spesa complessiva.<br> La sezione shop integra funzionalità avanzate ispirate all’<b>e-commerce</b>, permettendo di scegliere,<br> modificare e acquistare merchandise ufficiale con un sistema di carrello versatile, che consente di<br> sfogliare, selezionare e modificare il contenuto prima dell'acquisto, il tutto per offrire un’esperienza utente innovativa e coinvolgente.",
    resumeEdu:"Titolo di Studio:",resumeEdu2:"Diploma Scientifico",resumeLang:"Lingue",resumeLang2:"Italiano - Inglese <span>(C1)</span>", resumeSkill1:"Apprendimento Rapido",resumeSkill2:"Multipotenziale", resumeSkill3:"Lavoro di Squadra",
    resumeSkill4:"Team Building", resumeSkill5:"Creatività",resumeSkill6:"Performante sotto stress",resumeSkill7:"Amichevole e Disponibile",
    jobTitle1:"Commesso",jobPlace1:"Cartolibreria l&#39;Apostrofo",jobTitle2:"S.Media Manager",jobPlace2:"",jobTitle3:"Venditore",jobPlace3:"Intimo U-sel",
    jobTitle4:"Teleseller",jobPlace4:"Vodafone/Mediaset Prm",
  };

  english={   
    navigation1:"Projects",navigation2:"Contacts",
    heroTitle:"<b>Hi!I'am <br> Simone Zavaglia</b>",heroDescription:"Front-end developer looking for work experience <br> Dynamic, insightful and an extreme quick learner. ", heroContacts:"<b>Contacts</b>", 
    heroAbility1:"APIs and Libraries",heroAbility2:"Non-relational databases",heroImgDescription:"Specialized in developing applications using <b>Angular</b> or <b>Javascript</b> with simple yet modern design.", 
    heroContactMe:"Contact me or visit my social media", aboutPolaroid:"That's totally me!",
    aboutDescription:'Name&#39;s Simone and i&#39;m <s> 30</s> <span>31</span> years old. I&#39;m a noisy and lively guy that loves a lot of things and hates at least twice as much. About me, people says that i talk a lot, that i&#39;m <s>Do-No-Wrong Guy </s> <span id="span2">meticulous</span> and that i spend all my time<br> on the PC. But i have some flaws too! <br>Standing still and doing nothing makes me anxious, which is why I always try to give my days a productive purpose: <br>I write, code, read, listen to, or watch something that can <s>excites</s> <span id=span3>inspires</span> me.<br> I enjoy learning new things and improving what I already know so much that I can barely keep up with the countless passions I have.<br>I&#39;m lucky to have amazing people around me who always remind me that without others, without "teamwork," you can never go far.',
    aboutListLove:"<b>Loves</b>",aboutListLove1:"Games",aboutListLove2:"Cards",aboutListLove3:"Coffee",
    aboutListHate:"<b>Hates</b>",aboutListHate1: "Waking up early",
    aboutListHate2: "The heat",
    aboutListHate3: "People touching <br>me while they talk",
    proj1Utilized: "<b>Built with:</b> Angular, CSS, Node.js",
    proj1Description: "This project represents my most complete <b>full-stack</b> work, integrating every aspect of development, from graphics to database, to create a full game with 13 levels. The non-relational database, implemented with <b>Node.js</b> and <b>Mongoose</b>, dynamically manages music, images, levels, and game data. Thanks to the <b>asynchronous</b> code structure, data is saved and updated in real time. The system uses <b>lazy loading</b> for sounds and images, optimizing performance through <b>caching</b> and reducing waiting times. The modularity of the entire game ensures efficient component management, while <b>route guards</b> limit navigation based on user data, offering an engaging experience similar to a video game, but implemented as a website via Angular.",
    proj2Utilized: "<b>Built with:</b> JavaScript and CSS",
    proj2Description: "A week after studying JavaScript, I started this <b>first project</b>, learning to code while building it. In about fifteen days, I created a small <b>one-page</b> game based on <b>modal windows</b> that emulates the style of a 2000s/2010s browser game. The data is <b>mocked</b> within the script in arrays of objects that account for Pokémon, their stats, and their possible moves. The handling of music, sounds, and animations is very basic but does the job, with more complex functions created for managing the opponent’s <b>AI</b>. <br>The game also allows players to evolve Pokémon and organize them into boxes easily thanks to <b>drag and drop</b>. <br>This project, though my first, taught me a lot and is like a first love: <br>You never forget it.",
    proj3Title: "Personal Portfolio Website - ZG Model & Actor",
    proj3Utilized: "<b>Built with:</b> Angular, CSS, Swiper.js",
    proj3Description: "I developed personal websites for an actor and a model, focusing on a minimalist and elegant design. The hero section, built with the Swiper.js library, includes clear and direct CTAs to immediately capture attention. Every section of the site is animated with simple yet effective elements, maintaining lightness and fluidity. The section dedicated to roles performed features a dynamic carousel in streaming-platform style, with real-time updated data. I also integrated social media profiles and video content to ensure quick access to the subject’s main platforms and marketing campaigns. The interface enables direct and immediate contact through main channels, facilitating inquiries or engagement opportunities.",
    proj4Title: "Commercial Website - Ace of Cups",
    proj4Utilized: "<b>Built with:</b> Angular, CSS",
    proj4Description: "In this project, I created a digital showcase for a mystical-themed cocktail bar with a highly interactive experience achieved through smooth animations with <b>Angular Animations</b> and mocked data to simulate a real environment.<br> The menu allows users to view and manage orders in a <b>clear</b> and <b>intuitive</b> way, linking them to their table via a <br><b>unique code</b> and monitoring total expenses in real time.<br> The shop section includes advanced features inspired by <b>e-commerce</b>, allowing users to choose, <br>modify, and purchase official merchandise with a versatile cart system that enables <br>browsing, selecting, and editing content before purchase, all to provide an innovative and engaging user experience.",
    resumeEdu: "Education:",
    resumeEdu2: "Scientific High School Diploma",
    resumeLang: "Languages",
    resumeLang2: "Italian - English <span>(C1)</span>",
    resumeSkill1: "Fast Learner",
    resumeSkill2: "Multipotential",
    resumeSkill3: "Teamwork",
    resumeSkill4: "Team Building",
    resumeSkill5: "Creativity",
    resumeSkill6: "Performs well under pressure",
    resumeSkill7: "Friendly and Approachable",
    jobTitle1: "Shop Assistant",
    jobPlace1: "Cartolibreria l'Apostrofo",
    jobTitle2: "S.Media Manager",
    jobPlace2: "",
    jobTitle3: "Salesperson",
    jobPlace3: "Intimo U-sel",
    jobTitle4: "Teleseller",
    jobPlace4: "Vodafone/Mediaset Prm",

  };

  balloonIta={
    aboutLocked:"Ciao sono <b>Simone</b>, questo è il mio sito portfolio.<br> Sarò la tua guida qui dentro.<br> Puoi navigare su questa versione o su quella più seria, se preferisci.",
    aboutMoving:"E' mio dovere seguirti in questa navigazione. Altrimenti che guida sarei?",
    heroReturn:"Ufffff oh! Ufff oh!<br> Stavo soffocando là sotto!",
    project1:"La parte più complicata è stata la gestione di ogni singolo livello. Se vuoi, puoi provare il gioco su itch.io. Funziona tutto, fino alla fine…<br> Credo.",
    project2:"Tutti i programmatori, prima o poi, hanno avuto a che fare coi Pokémon. Ammettiamolo dai.",
    project3:"Sapete cosa dovremmo fare? APRIRE UN BAR! Questa era una cit. ad How i Met Your- lascia perdere… Non dovevo distrarti.",
    project4:"Fare un sito per un parente è come correre con le forbici in mano e i lacci slacciati.",
    resume1: "In ambienti diversi ho imparato una miriade di cose diverse. So lavorare a contatto con la gente e dietro le quinte, da solo e in gruppo e ho ottime doti comunicative.",
    resume2: "I lavori che ho fatto non c'entrano nulla con la programmazione, lo so. Ma cosa non si fa per campare eh?",
    contacts:"Spero che la mia personalità e le mie capacità ti abbiano almeno incuriosito. Se vuoi sapere di più o vuoi contattarmi, beh… Sai già cosa fare!",
    hidle1:"Sei ancora li? Ti sei alzato a prendere un caffè?<br>Sbrighiamoci però, tra un paio d’ore devo fare l’avatar digitale su un’app di trading.",
    hidle2:"E' imbarazzante stare qui fermo a non fare nulla...",
    return1:"Ma si guardiamo un'altra volta questa parte!",
    return2:"Non l'avevamo già visto questo?",
    return3:"Questa sezione non è niente male lo so."
  };

  balloonEng={
    aboutLocked:"Hi! I'm <b>Simone</b>, this is my portfolio site.<br> Sarò la tua guida qui dentro.<br> Puoi navigare su questa versione o su quella più seria, se preferisci.",
    aboutMoving:"It's my duty to follow you during this navigation.<br> Otherwise, what kind of guide would I be?",
    heroReturn:"Ufffff oh! uff oh!<br> I was suffocating down there!",
    project1:"The most challenging part was managing each individual level. If you want, you can try the game on <b>itch.io</b>. Everything works, all the way to the end...<br>I guess",
    project2: "All programmers, sooner or later, have dealt with Pokémon. Let's admit it, come on.",
    project3: "You know what we should do? OPEN A BAR! That was a reference to How I Met Your- never mind... I shouldn't distract you.",
    project4: "Making a website for a relative is like running with scissors in hand and untied shoelaces.",
    resume1: "In different environments, I've learned a myriad of different things. I know how to work with people and behind the scenes, alone and in team, with excellent communication skills.",
    resume2: "The jobs I've done have nothing to do with programming, I know. But hey, you do what you gotta do to get by, right?",
    contacts: "I hope my personality and skills have at least piqued your curiosity. If you'd like to know more or contact me, well... You already know what to do!",
    hidle1: "You're still here? Did you go grab a coffee?<br>Let’s hurry up though, in a couple of hours I have to create a digital avatar on a trading app.",
    hidle2: "It’s awkward standing here doing nothing...",
    return1: "Oh well, let's look at this part again!",
    return2: "Haven't we already seen this?",
    return3: "This section isn't half bad, I know."
  }


  private selectedLanguage = new BehaviorSubject<any>(this.italian); // Italiano come lingua predefinita
  selectedLanguage$ = this.selectedLanguage.asObservable();
  private selectedLanguageAvatar = new BehaviorSubject<any>(this.balloonIta); // Italiano come lingua predefinita
  selectedLanguageAvatar$ =this.selectedLanguageAvatar.asObservable();

  constructor(private sanitizer: DomSanitizer) {}

  // Metodo per cambiare lingua
  changeLanguage(selezione: string): void {
    if (selezione === 'ITA' && this.selectedLanguage.getValue() !== this.italian) {
      this.selectedLanguage.next(this.sanitizeLanguage(this.italian));
      this.selectedLanguageAvatar.next(this.sanitizeLanguage(this.balloonIta));
    }
    if (selezione === 'ENG' && this.selectedLanguage.getValue() !== this.english) {
      this.selectedLanguage.next(this.sanitizeLanguage(this.english));
      this.selectedLanguageAvatar.next(this.sanitizeLanguage(this.balloonEng));
    }
  }

  // Metodo per sanificare un oggetto lingua
  sanitizeLanguage(language: any): any {
    const sanitized: any = {};
    for (const key in language) {
      if (typeof language[key] === 'string' && language[key].includes('<')) {
        sanitized[key] = this.sanitizer.bypassSecurityTrustHtml(language[key]);
      } else {
        sanitized[key] = language[key];
      }
    }
    return sanitized;
  }

}
