import { RESUME_PDF_URL } from '../../config/urls';

export class Terminal {
	private container: HTMLElement;
	private input!: HTMLInputElement;
	private output!: HTMLElement;
	private history: string[] = [];
	private historyIndex: number = -1;
	private currentPath: string = '/';

	private readonly files: Record<string, string> = {
		'home.md': '/?file=home',
		'experience.ts': '/?file=experience',
		'education.css': '/?file=education',
		'projects.sql': '/?file=projects',
		'contact.html': '/?file=contact',
		'resume.pdf': RESUME_PDF_URL,
	};

	private readonly aliases: Record<string, string> = {
		'home': 'home.md',
		'experience': 'experience.ts',
		'education': 'education.css',
		'projects': 'projects.sql',
		'contact': 'contact.html',
		'resume': 'resume.pdf',
	};

	constructor(container: HTMLElement) {
		this.container = container;
		this.init();
	}

	private init() {
		this.container.innerHTML = `
			<div class="terminal-output" id="terminal-output"></div>
			<div class="terminal-input-line">
				<span class="terminal-prompt">visitor@marlonii ~ %</span>
				<input 
					type="text" 
					class="terminal-input" 
					id="terminal-input"
					autocomplete="off"
					spellcheck="false"
				/>
			</div>
		`;

		this.output = this.container.querySelector('#terminal-output') as HTMLElement;
		this.input = this.container.querySelector('#terminal-input') as HTMLInputElement;

		this.addOutput('--------------------------------');
		this.addOutput('Welcome to my website!');
		this.addOutput('Type "help" to see available commands.');
		this.addOutput('--------------------------------');

		this.input.addEventListener('keydown', (e) => this.handleKeyDown(e));
		this.input.addEventListener('input', () => this.handleInput());
		this.input.focus();

		this.container.addEventListener('click', () => {
			this.input.focus();
		});
	}

	private handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			e.preventDefault();
			this.executeCommand(this.input.value.trim());
			this.input.value = '';
			this.historyIndex = -1;
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			if (this.history.length > 0) {
				if (this.historyIndex === -1) {
					this.historyIndex = this.history.length;
				}
				if (this.historyIndex > 0) {
					this.historyIndex--;
					this.input.value = this.history[this.historyIndex];
				}
			}
		} else if (e.key === 'ArrowDown') {
			e.preventDefault();
			if (this.historyIndex >= 0) {
				this.historyIndex++;
				if (this.historyIndex >= this.history.length) {
					this.historyIndex = -1;
					this.input.value = '';
				} else {
					this.input.value = this.history[this.historyIndex];
				}
			}
		} else if (e.key === 'Escape' && e.shiftKey) {
			e.preventDefault();
			this.handleTabCompletion();
		}
	}

	private handleInput() {
		const span = document.createElement('span');
		span.style.visibility = 'hidden';
		span.style.position = 'absolute';
		span.style.font = window.getComputedStyle(this.input).font;
		span.textContent = this.input.value || ' ';
		document.body.appendChild(span);
		const width = span.offsetWidth;
		document.body.removeChild(span);
		this.input.style.width = `${Math.max(20, width + 10)}px`;
	}

	private resolveFile(name: string): string | undefined {
		if (this.files[name]) return name;
		const alias = this.aliases[name.toLowerCase()];
		if (alias) return alias;
		return undefined;
	}

	private handleTabCompletion() {
		const input = this.input.value.trim();
		const parts = input.split(' ');
		const command = parts[0];
		const arg = parts[1] || '';

		if ((command === 'open' || command === 'cd') && arg) {
			const allNames = [...Object.keys(this.files), ...Object.keys(this.aliases)];
			const matches = allNames.filter(name =>
				name.startsWith(arg.toLowerCase())
			);
			if (matches.length === 1) {
				this.input.value = `${command} ${matches[0]}`;
			} else if (matches.length > 1) {
				this.addOutput(matches.join('  '));
				this.addPrompt();
			}
		}
	}

	private executeCommand(command: string) {
		if (!command) {
			this.addPrompt();
			return;
		}

		this.history.push(command);
		this.addOutput(`visitor@marlonii ~ % ${command}`, 'command');

		const parts = command.split(' ');
		const cmd = parts[0].toLowerCase();
		const args = parts.slice(1);

		switch (cmd) {
			case 'open':
			case 'cd':
				this.handleOpen(args);
				break;
			case 'ls':
				this.handleLs();
				break;
			case 'help':
				this.handleHelp();
				break;
			case 'clear':
				this.handleClear();
				break;
			case 'pwd':
				this.handlePwd();
				break;
			case 'cat':
				this.handleCat(args);
				break;
			default:
				this.addOutput(`Command not found: ${cmd}. Type "help" for available commands.`);
				this.addPrompt();
		}
	}

	/** External http(s) URLs open in a new tab; same-site routes use navigation. */
	private navigateToUrl(url: string) {
		if (/^https?:\/\//i.test(url)) {
			const w = window.open(url, '_blank');
			if (w) w.opener = null;
		} else {
			window.location.href = url;
		}
	}

	private handleOpen(args: string[]) {
		if (args.length === 0) {
			this.addOutput('Usage: open <filename>');
			this.addOutput(`Available files: ${Object.keys(this.files).join(', ')}`);
			this.addPrompt();
			return;
		}

		const target = args[0];
		const resolved = this.resolveFile(target);

		if (resolved && this.files[resolved]) {
			const url = this.files[resolved];
			this.addOutput(`Opening ${resolved}...`);
			const isExternal = /^https?:\/\//i.test(url);
			if (isExternal) {
				this.navigateToUrl(url);
				this.addPrompt();
			} else {
				setTimeout(() => this.navigateToUrl(url), 300);
			}
		} else {
			this.addOutput(`open: no such file: ${target}`);
			this.addOutput(`Available files: ${Object.keys(this.files).join(', ')}`);
			this.addPrompt();
		}
	}

	private handleLs() {
		this.addOutput(Object.keys(this.files).join('  '));
		this.addPrompt();
	}

	private handleHelp() {
		this.addOutput('Available commands:');
		this.addOutput('  open <file>   - Open a file (e.g., open experience.ts)');
		this.addOutput('  cd <file>     - Alias for open');
		this.addOutput('  Shift+Tab     - Complete filename after open/cd');
		this.addOutput('  ls            - List available files');
		this.addOutput('  pwd           - Show current location');
		this.addOutput('  clear         - Clear terminal output');
		this.addOutput('  help          - Show this help message');
		this.addOutput('');
		this.addOutput('Available files:');
		Object.keys(this.files).forEach(file => this.addOutput(`  ${file}`));
		this.addPrompt();
	}

	private handleClear() {
		this.output.innerHTML = '';
		this.addPrompt();
	}

	private handlePwd() {
		this.addOutput(this.currentPath);
		this.addPrompt();
	}

	private handleCat(args: string[]) {
		if (args.length === 0) {
			this.addOutput('cat: missing file operand');
			this.addOutput('Try: cat <filename>');
		} else {
			const target = args[0];
			const resolved = this.resolveFile(target);
			if (resolved) {
				const url = this.files[resolved];
				this.addOutput(`Opening ${resolved}...`);
				const isExternal = /^https?:\/\//i.test(url);
				if (isExternal) {
					this.navigateToUrl(url);
				} else {
					setTimeout(() => this.navigateToUrl(url), 300);
				}
			} else {
				this.addOutput(`cat: ${target}: No such file or directory`);
			}
		}
		this.addPrompt();
	}

	private addOutput(text: string, className: string = '') {
		const line = document.createElement('div');
		line.className = `terminal-line ${className}`;
		line.textContent = text;
		this.output.appendChild(line);
		this.scrollToBottom();
	}

	private addPrompt() {
		// Prompt is always visible in the input line
	}

	private scrollToBottom() {
		this.output.scrollTop = this.output.scrollHeight;
	}
}
