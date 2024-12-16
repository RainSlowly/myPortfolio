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
    proj2Utilized:"<b>Fatto con:</b>Javascript e CSS", proj2Description:'Una settimana dopo aver studiato Javascript ho iniziato questo <b>primo progetto</b> imparando a programmare parallelamente alla sua edificazione.In circa quindici giorni ho creato un giochino <b>one page</b> basato sulli&#39;uso di <b>finestre modali</b> che emula lo stile di un browser game anni 2000/10.I dati sono <b>mockati</b> alli&#39;interno dello script in array di oggetti che tengono conto dei pokemon, delle loro statistiche e delle loro possibili mosse. La gestione delle musiche, dei suoni e delle animazioni è molto basilare ma fa il suo lavoro, con funzioni più complesse create per la gestione delli&#39; <b>IA</b> delli&#39;avversario.<br>Il gioco comprende anche un pokedex funzionante grazie alli&#39;integrazione di un <b>API</b> esterna.<br> Questo progetto, seppur il mio primo, mi ha insegnato tantissimo ed è come il primo amore:<br> Non si scorda mai.',
    proj3Title:"Sito Vetrina Personale - ZG Model & Actor", proj3Utilized:"<b>Fatto con:</b>Angular, Css, Swiper.js",proj3Description:"Ho sviluppato siti web personali per un attore e un modello, focalizzati su un design minimalista ed elegante. La hero section, realizzata con la libreria Swiper.js, include CTA chiare e dirette per catturare immediatamente l’attenzione. Ogni sezione del sito è animata con elementi semplici ma efficaci, che mantengono leggerezza e fluidità. La sezione dedicata ai ruoli svolti presenta un carosello dinamico in stile piattaforma di streaming, con dati aggiornati in tempo reale. Ho inoltre integrato profili social e contenuti video per garantire un rapido accesso alle principali piattaforme e campagne marketing del soggetto. L’interfaccia consente un contatto diretto e immediato attraverso i canali principali, facilitando richieste di informazioni o opportunità di ingaggio",
    proj4Title:"Sito commerciale - Ace of Cups", proj4Utilized:"<b>Fatto con:</b>Angular, Css", proj4Description:"In questo progetto ho creato una vetrina digitale per un cocktail bar dal carattere mistico, con un’esperienza altamente interattiva realizzata grazie ad animazioni fluide con <b>Angular Animations</b> e dati mockati per simulare un ambiente reale.<br> Il menù consente di visualizzare e gestire gli ordini in modo <b>chiaro</b> e <b>intuitivo</b>, collegandoli al proprio tavolo tramite un<br> <b>codice univoco</b> e monitorando in tempo reale la spesa complessiva.<br> La sezione shop integra funzionalità avanzate ispirate all’<b>e-commerce</b>, permettendo di scegliere,<br> modificare e acquistare merchandise ufficiale con un sistema di carrello versatile, che consente di<br> sfogliare, selezionare e modificare il contenuto prima dell'acquisto, il tutto per offrire un’esperienza utente innovativa e coinvolgente.",
    resumeEdu:"Titolo di Studio:",resumeEdu2:"Diploma Scientifico",resumeLang:"Lingue",resumeLang2:"Italiano - Inglese <span>(C1)</span>", resumeSkill1:"Apprendimento Rapido",resumeSkill2:"Multipotenziale", resumeSkill3:"Lavoro di Squadra",
    resumeSkill4:"Team Building", resumeSkill5:"Creatività",resumeSkill6:"Performante sotto stress",resumeSkill7:"Amichevole e Disponibile",
    jobTitle1:"Commesso",jobPlace1:"Cartolibreria l'Apostrofo",
  };

  english={   
    navigation1:"Projects",navigation2:"Contacts",
    heroTitle:"<b>Hi!I'am <br> Simone Zavaglia</b>",heroDescription:"Front-end developer looking for work experience <br> Dynamic, insightful and an extreme quick learner. ", heroContacts:"<b>Contacts</b>", 
    heroAbility1:"APIs and Libraries",heroAbility2:"Non-relational databases",heroImgDescription:"Specialized in developing applications using <b>Angular</b> or <b>Javascript</b> with simple yet modern design.", 
    heroContactMe:"Contact me or visit my social media", aboutPolaroid:"That's totally me!",
    aboutDescription:'Namei&#39;s Simone and i&#39;m <s> 30</s> <span>31</span> years old. I&#39;m a noisy and lively guy that loves a lot of things and hates at least twice as much. About me, people says that i talk a lot, that i&#39;m <s>Do-No-Wrong Guy </s> <span id="span2">meticulous</span> and that i spend all my time<br> on the PC. But i have some flaws too! <br>Stare fermo a non fare nulla mi mette ansia, per questo cerco di dare sempre un senso alle mie giornate in maniera produttiva: <br>Scrivo, programmo, leggo, ascolto o guardo qualcosa che mi <s>fomenti</s> <span id="span3">ispiri </span>.<br> Mi piace imparare cose sempre nuove e migliorare ciò che già conosco, tanto che non riesco a star dietro alle N-mila passioni che ho.<br>Ho la fortuna di avere belle persone accanto che mi ricordano sempre che senza gli altri, senza "gioco di squadra", non si arriva mai lontano.',
    aboutListLove:"<b>Loves</b>",aboutListLove1:"Games",aboutListLove2:"Cards",aboutListLove3:"Coffee",
    aboutListHate:"<b>Hates</b>",aboutListHate1:"Svegliarmi presto",aboutListHate2:"Il caldo",aboutListHate3:"Chi mi tocca <br>mentre parla",
    proj1Utilized:"<b>Fatto con:</b>Angular, Css, Node.js", proj1Description:'Questo progetto rappresenta il mio lavoro <b>fullstack</b> più completo, integrando ogni aspetto dello sviluppo, dalla grafica al database, per creare un gioco completo con 13 livelli. Il database non relazionale, implementato con <b>Node.js</b> e <b>Mongoose</b>, gestisce dinamicamente musiche, immagini, livelli e dati di gioco. Grazie alla struttura <b>asincrona</b> del codice, i dati vengono salvati e aggiornati in tempo reale.Il sistema sfrutta <b>caricamenti lazy</b> per suoni e immagini, ottimizzando le performance tramite <b>caching</b> e riducendo i tempi di attesa. La modularità dell’intero gioco permette una gestione efficiente dei componenti, mentre le <b>route guards</b> limitano la navigazione in base ai dati dell’utente, offrendo un’esperienza coinvolgente simile a un videogame, ma realizzata come un sito web tramite Angular.',
    proj2Utilized:"<b>Fatto con:</b>Javascript e CSS", proj2Description:'Una settimana dopo aver studiato Javascript ho iniziato questo <b>primo progetto</b> imparando a programmare parallelamente alla sua edificazione.In circa quindici giorni ho creato un giochino <b>one page</b> basato sulli&#39;uso di <b>finestre modali</b> che emula lo stile di un browser game anni 2000/10.I dati sono <b>mockati</b> alli&#39;interno dello script in array di oggetti che tengono conto dei pokemon, delle loro statistiche e delle loro possibili mosse. La gestione delle musiche, dei suoni e delle animazioni è molto basilare ma fa il suo lavoro, con funzioni più complesse create per la gestione delli&#39; <b>IA</b> delli&#39;avversario.<br>Il gioco comprende anche un pokedex funzionante grazie alli&#39;integrazione di un <b>API</b> esterna.<br> Questo progetto, seppur il mio primo, mi ha insegnato tantissimo ed è come il primo amore:<br> Non si scorda mai.',
    proj3Title:"Sito Vetrina Personale - ZG Model & Actor", proj3Utilized:"<b>Fatto con:</b>Angular, Css, Swiper.js",proj3Description:"Ho sviluppato siti web personali per un attore e un modello, focalizzati su un design minimalista ed elegante. La hero section, realizzata con la libreria Swiper.js, include CTA chiare e dirette per catturare immediatamente l’attenzione. Ogni sezione del sito è animata con elementi semplici ma efficaci, che mantengono leggerezza e fluidità. La sezione dedicata ai ruoli svolti presenta un carosello dinamico in stile piattaforma di streaming, con dati aggiornati in tempo reale. Ho inoltre integrato profili social e contenuti video per garantire un rapido accesso alle principali piattaforme e campagne marketing del soggetto. L’interfaccia consente un contatto diretto e immediato attraverso i canali principali, facilitando richieste di informazioni o opportunità di ingaggio",
    proj4Title:"Sito commerciale - Ace of Cups", proj4Utilized:"<b>Fatto con:</b>Angular, Css", proj4Description:"In questo progetto ho creato una vetrina digitale per un cocktail bar dal carattere mistico, con un’esperienza altamente interattiva realizzata grazie ad animazioni fluide con <b>Angular Animations</b> e dati mockati per simulare un ambiente reale.<br> Il menù consente di visualizzare e gestire gli ordini in modo <b>chiaro</b> e <b>intuitivo</b>, collegandoli al proprio tavolo tramite un<br> <b>codice univoco</b> e monitorando in tempo reale la spesa complessiva.<br> La sezione shop integra funzionalità avanzate ispirate all’<b>e-commerce</b>, permettendo di scegliere,<br> modificare e acquistare merchandise ufficiale con un sistema di carrello versatile, che consente di<br> sfogliare, selezionare e modificare il contenuto prima dell'acquisto, il tutto per offrire un’esperienza utente innovativa e coinvolgente.",
    resumeEdu:"Titolo di Studio:",resumeEdu2:"Diploma Scientifico",resumeLang:"Lingue",resumeLang2:"Italiano - Inglese <span>(C1)</span>", resumeSkill1:"Apprendimento Rapido",resumeSkill2:"Multipotenziale", resumeSkill3:"Lavoro di Squadra",
    resumeSkill4:"Team Building", resumeSkill5:"Creatività",resumeSkill6:"Performante sotto stress",resumeSkill7:"Amichevole e Disponibile",
    jobTitle1:"Commesso",jobPlace1:"Cartolibreria l'Apostrofo",

  };
  private selectedLanguage = new BehaviorSubject<any>(this.italian); // Italiano come lingua predefinita
  selectedLanguage$ = this.selectedLanguage.asObservable();

  constructor(private sanitizer: DomSanitizer) {}

  // Metodo per cambiare lingua
  changeLanguage(selezione: string): void {
    if (selezione === 'ITA' && this.selectedLanguage.getValue() !== this.italian) {
      this.selectedLanguage.next(this.italian);
    }
    if (selezione === 'ENG' && this.selectedLanguage.getValue() !== this.english) {
      this.selectedLanguage.next(this.english);
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