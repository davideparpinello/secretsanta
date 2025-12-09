export const it = {
    language: {
      flag: "🇮🇹",
      name: "Italiano",
    },
    errors: {
      needMoreParticipants: "Servono almeno 2 partecipanti!",
      invalidPairs: "Impossibile generare coppie valide con le regole attuali. Controlla le regole e riprova.",
      multipleMustRules: "Sono state trovate più regole MUST",
      conflictingRules: "Regole in conflitto tra una MUST e una MUST NOT",
      emptyName: "Nome vuoto",
      duplicateName: "Nome duplicato: {{name}}",
      invalidRuleFormat: "Formato regola non valido: {{rule}}",
      unknownParticipant: "Partecipante sconosciuto nella regola: {{name}}",
      noValidReceivers: "Non ci sono destinatari validi rimasti per questo partecipante",
      line: "Linea {{number}}"
    },
    home: {
      vanity: "Progetto iniziato nell’inverno 2015 da Maël",
      sponsor: "Supportami su GitHub",
      title: "Pianificatore Secret LeppaSanta",
      explanation: [
        "Benvenuto nel Secret LeppaSanta, 13 Dicembre 2025"
      ].map(line => `<p>${line}</p>`).join(''),
      exampleLink: "Link di esempio",
    },
    pairing: {
      title: "Il tuo abbinamento Secret Santa",
      assignment: "Benvenuto, <name/>! Sei stato scelto per fare un regalo a:",
      loading: "Caricamento...",
      error: "Impossibile decrittare il messaggio. Il link potrebbe non essere valido.",
      startYourOwn: "Crea il tuo Secret Santa!"
    },
    participants: {
      title: "Partecipanti",
      generationWarning: "Importante: Qualsiasi modifica alla lista dei partecipanti o alle impostazioni richiederà di creare nuovi abbinamenti. I link esistenti non verranno aggiornati retroattivamente.",
      addPerson: "Aggiungi persona",
      generatePairs: "Genera abbinamenti",
      enterName: "Inserisci il nome del partecipante",
      editRules: "Modifica regole",
      removeParticipant: "Rimuovi partecipante",
      rulesCount_one: "{{count}} regola impostata",
      rulesCount_other: "{{count}} regole impostate",
      switchToFormView: "Passa alla vista modulo",
      switchToTextView: "Passa alla vista testo"
    },
    rules: {
      title: "Regole per {{name}}",
      mustBePairedWith: "Deve essere abbinato con",
      mustNotBePairedWith: "Non deve essere abbinato con",
      selectParticipant: "Seleziona un altro partecipante",
      removeRule: "Rimuovi regola",
      addMustRule: "Forza un abbinamento",
      addMustNotRule: "Impedisci un abbinamento",
      cancel: "Annulla",
      saveRules: "Salva regole",
      hintLabel: "Suggerimento regalo",
      hintPlaceholder: "Inserisci un suggerimento sulle preferenze del regalo (opzionale)",
    },
    links: {
      title: "Link da condividere",
      warningParticipantsChanged: "Attenzione: i partecipanti o le regole sono cambiati dall’ultima generazione di questi link.",
      resetAssignments: "Rigenera abbinamenti",
      shareInstructions: "Condividi ciascun link solo con il relativo partecipante",
      exportCSV: "Esporta in CSV",
      copySecretLink: "Copia link segreto",
      linkCopied: "Aggiunto agli appunti!",
      for: "per"
    },
    settings: {
      title: "Impostazioni",
      instructions: "Istruzioni aggiuntive",
      instructionsPlaceholder: "es. budget, data, luogo...",
      instructionsHelp: "Saranno mostrate a tutti i partecipanti nella loro pagina dell’abbinamento. Mantienile brevi: aumentano la lunghezza dei link."
    },
  };
  